import { forwardRef } from 'react';
import { MyInputProps } from '../../../types';

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  return (
    <>
      <label htmlFor={props.id}></label>
      <input
        ref={ref}
        className='w-full px-3 py-1 my-1 border border-teal-500'
        {...props}
      />
    </>
  );
});

export default MyInput;
