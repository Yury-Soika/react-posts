import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar: React.FC = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);

  const logout = () => {
    setAuthUser({ id: 0, email: '', role: '', authToken: '' });
    localStorage.removeItem('auth');
  };

  return (
    <div className='navbar flex items-center justify-between px-4 py-2 bg-gray-200'>
      <div className='navbar__links'>
        <Link to='/about' className='mr-4 text-blue-500'>
          About
        </Link>
        <Link to='/posts' className='mr-4 text-blue-500'>
          Posts
        </Link>
        <Link to='/users' className='text-blue-500'>
          Users
        </Link>
      </div>
      {authUser.id ? (
        <MyButton onClick={logout} className='mr-4'>
          Log out
        </MyButton>
      ) : null}
    </div>
  );
};

export default Navbar;
