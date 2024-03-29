import React from 'react';
import MyButton from '../../../shared/components/UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import { ItemProps } from '../../../shared/types';
import { Post } from '../../types';

const PostItem: React.FC<ItemProps<Post>> = ({ item: post, remove }) => {
  const navigate = useNavigate();

  const handleOpenPost = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className='border border-teal-500 rounded p-4 mt-4 flex justify-between items-center'>
      <div>
        <strong>{post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div className='flex'>
        <MyButton onClick={() => handleOpenPost(post.id)}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
