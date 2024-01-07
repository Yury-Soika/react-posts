import React, { useState, FormEvent } from 'react';
import MyInput from '../../../../components/UI/input/MyInput';
import MyButton from '../../../../components/UI/button/MyButton';
import { NewUser } from '../../types';
import { FormProps } from '../../../../types';

const UserForm: React.FC<FormProps<NewUser>> = ({ create }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const addNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    create(user);

    setUser({ email: '', password: '' });
  };

  return (
    <form onSubmit={addNewUser}>
      <MyInput
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type='text'
        placeholder='User email'
      />

      <MyInput
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type='password'
        placeholder='User password'
      />

      <MyButton type='submit'>Create user</MyButton>
    </form>
  );
};

export default UserForm;
