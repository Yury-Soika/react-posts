import React, { useEffect, useRef, useState } from 'react';
import PostForm from '../components/common/PostForm';
import PostList from '../components/common/PostList';
import PostFilter from '../components/common/PostFilter';
import MyButton from '../../../components/UI/button/MyButton';
import MyModal from '../../../components/UI/MyModal/MyModal';
import Loader from '../../../components/UI/Loader/Loader';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../../../hooks/useFetching';
import { useObserver } from '../../../hooks/useObserver';
import { LIMIT_PER_PAGE } from '../../../constants';
import { FilterType, Post } from '../types';
import { getAllPosts } from '../services/PostService';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<FilterType>({
    sort: null,
    query: '',
  });
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (page: number) => {
      const response = await getAllPosts(page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(totalCount / LIMIT_PER_PAGE);
    },
  );

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

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
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
