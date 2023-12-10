import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { AuthContext } from '../context/index.ts';
import Loader from '../components/UI/Loader/Loader.tsx';
import About from '../pages/About.tsx';
import Posts from '../pages/Posts.tsx';
import PostIdPage from '../pages/PostIdPage.tsx';
import Login from '../pages/Login.tsx';

const AppRouter: React.FC = () => {
  const { isAuth, isLoading } = useContext(AuthContext)!;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostIdPage />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
