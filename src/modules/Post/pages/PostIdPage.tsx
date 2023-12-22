import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/UI/Loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import { Comment, Post } from '../types';
import { getCommentsByPostId, getPostById } from '../services/PostService';

const PostIdPage: React.FC = () => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchPostById, isLoading] = useFetching(async (id: string) => {
    const response = await getPostById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading] = useFetching(async (id: string) => {
    const response = await getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <div>
      <h1>Page post ID = {params.id}</h1>

      {isLoading ? (
        <Loader />
      ) : (
        post && (
          <div>
            {post.id}. {post.title}
          </div>
        )
      )}

      <h1>Comments</h1>

      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
