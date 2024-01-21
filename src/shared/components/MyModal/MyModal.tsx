import React from 'react';
import { MyModalProps } from '../../types';

const MyModal: React.FC<MyModalProps> = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 ${
        visible ? 'flex justify-center items-center' : 'hidden'
      } bg-black bg-opacity-50`}
      onClick={() => setVisible(false)}
    >
      <div
        className='p-6 bg-white rounded-lg min-w-64'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
