import React, { useContext, FormEvent, useState } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { authentication } from '../modules/Auth/services/AuthService';
import { decodeToken } from '../utils';

const Login: React.FC = () => {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchAuth(user);
  };

  const [fetchAuth, isAuthLoading, authError] = useFetching(async (user) => {
    const response = await authentication(user);

    const authToken = response.data.token;

    if (!isAuthLoading && !authError && authToken) {
      setAuthUser(decodeToken(authToken));

      localStorage.setItem('auth', JSON.stringify(authToken));

      navigate(`/posts`);
    } else if (authError) {
      throw new Error(authError);
    } else {
      throw new Error('Unexpected authentification error');
    }
  });

  return (
    <div className='mx-64'>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput
          type='text'
          id='email'
          placeholder='Enter email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <MyInput
          type='password'
          id='password'
          placeholder='Enter password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <MyButton type='submit'>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
