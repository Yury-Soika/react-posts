import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import { PostItemProps } from '../../types';

const PostItem: React.FC<PostItemProps> = ({ post, remove }) => {
  const navigate = useNavigate();

  const handleOpenPost = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className='border border-teal-500 rounded p-4 mt-4 flex justify-between items-center'>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='flex'>
        <MyButton onClick={() => handleOpenPost(post.id)}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
