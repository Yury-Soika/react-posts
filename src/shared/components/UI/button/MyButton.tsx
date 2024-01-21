import React from 'react';
import { MyButtonProps } from '../../../types';

const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='px-3 py-1 text-teal-500 text-sm border border-teal-500 rounded cursor-pointer'
    >
      {children}
    </button>
  );
};

export default MyButton;
