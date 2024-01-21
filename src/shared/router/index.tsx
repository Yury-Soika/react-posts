import React, { useContext, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/index.ts';
import Loader from '../components/Loader/Loader.tsx';
import { AuthContextProps } from '../types/index.ts';

const Posts = lazy(() => import('../../Post/pages/Posts.tsx'));
const PostIdPage = lazy(() => import('../../Post/pages/PostIdPage.tsx'));
const Users = lazy(() => import('../../User/pages/Users.tsx'));
const Login = lazy(() => import('../pages/Login.tsx'));

const AppRouter: React.FC = () => {
  const { authUser, isLoading } = useContext<AuthContextProps>(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {authUser.id ? (
          <>
            <Route path='/posts' element={<Posts />} />
            <Route path='/users' element={<Users />} />
            <Route path='/posts/:id' element={<PostIdPage />} />
            <Route path='*' element={<Navigate to='/posts' />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
