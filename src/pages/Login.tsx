import React, { useContext, FormEvent } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate(`/posts`);
  };

  return (
    <div className='mx-64'>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Enter login' />
        <MyInput type='password' placeholder='Enter password' />
        <MyButton type='submit'>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
