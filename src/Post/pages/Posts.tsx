import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostForm from '../components/common/PostForm';
import PostList from '../components/common/PostList';
import PostFilter from '../components/common/PostFilter';
import MyButton from '../../shared/components/UI/button/MyButton';
import MyModal from '../../shared/components/MyModal/MyModal';
import Loader from '../../shared/components/Loader/Loader';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../../shared/hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { FilterType, NewPost, Post } from '../types';
import {
  createNewPost,
  getAllPosts,
  deletePost,
} from '../services/PostService';
import { LIMIT_PER_PAGE } from '../constants';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<FilterType>({
    sort: null,
    query: '',
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElement = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await getAllPosts();
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(totalCount / LIMIT_PER_PAGE);
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    fetchPosts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const createPost = async (newPost: NewPost) => {
    try {
      const createdPost = await createNewPost(newPost);
      setPosts([...posts, createdPost.data]);
      toast.success(`Post ${newPost.title} has been created`);
      setModal(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.response.data.message.find(Boolean));
    }
  };

  const removePost = async (post: Post) => {
    try {
      await deletePost(post.id);
      setPosts(posts.filter((p) => p.id !== post.id));
      toast.success(`Post ${post.title} has been deleted`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.response.data.message.find(Boolean));
    }
  };

  return (
    <div className='mx-64'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>Error: ${postError}</h1>}

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='My Posts'
      />

      <ToastContainer />

      <div ref={lastElement} />

      {isPostsLoading && (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Posts;
