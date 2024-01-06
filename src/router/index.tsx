import React, { useContext, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/index.ts';
import Loader from '../components/UI/Loader/Loader.tsx';

const About = lazy(() => import('../pages/About.tsx'));
const Posts = lazy(() => import('../modules/Post/pages/Posts.tsx'));
const PostIdPage = lazy(() => import('../modules/Post/pages/PostIdPage.tsx'));
const Login = lazy(() => import('../pages/Login.tsx'));

const AppRouter: React.FC = () => {
  const { authUser, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {authUser.id ? (
          <>
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
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
