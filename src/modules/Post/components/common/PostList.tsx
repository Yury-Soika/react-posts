import React from 'react';
import PostItem from './PostItem';
import { PostListProps } from '../../types';

const PostList: React.FC<PostListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Posts not found!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} remove={remove} item={post} />
      ))}
    </div>
  );
};

export default PostList;
