import React, { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../shared/components/Loader/Loader';
import { useFetching } from '../../shared/hooks/useFetching';
import { Post } from '../types';
import { getPostById } from '../services/PostService';

const PostIdPage: React.FC = () => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useFetching(async (id: string) => {
    const response = await getPostById(id);
    setPost(response.data);
  });

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <h1>Page post ID = {params.id}</h1>
        {post && (
          <div>
            {post.id}. {post.title}
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default PostIdPage;
