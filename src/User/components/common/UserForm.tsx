import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MyInput from '../../../shared/components/UI/input/MyInput';
import MyButton from '../../../shared/components/UI/button/MyButton';
import { NewUser } from '../../types';
import { FormProps } from '../../../shared/types';

const UserForm: React.FC<FormProps<NewUser>> = ({ create }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  const addNewUser: SubmitHandler<NewUser> = (data) => {
    create(data);
  };

  return (
    <form onSubmit={handleSubmit(addNewUser)}>
      <MyInput
        type='text'
        placeholder='User email'
        {...register('email', {
          required: 'This field is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Wrong email format',
          },
        })}
      />
      {errors.email && (
        <p style={{ color: 'red' }}>{errors.email.message as string}</p>
      )}

      <MyInput
        type='password'
        placeholder='User password'
        {...register('password', {
          required: 'This field is required',
          minLength: {
            value: 4,
            message: 'password should be more than 4 digits',
          },
        })}
      />
      {errors.password && (
        <p style={{ color: 'red' }}>{errors.password.message as string}</p>
      )}

      <MyButton type='submit'>Create user</MyButton>
    </form>
  );
};

export default UserForm;
