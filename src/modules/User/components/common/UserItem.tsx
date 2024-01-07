import React from 'react';
import MyButton from '../../../../components/UI/button/MyButton';
import { ItemProps } from '../../../../types';
import { User } from '../../types';

const PostItem: React.FC<ItemProps<User>> = ({ item: user, remove }) => {
  return (
    <div className='border border-teal-500 rounded p-4 mt-4 flex justify-between items-center'>
      <div>
        <strong>{user.email}</strong>
      </div>
      <div className='flex'>
        <MyButton onClick={() => remove(user)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
