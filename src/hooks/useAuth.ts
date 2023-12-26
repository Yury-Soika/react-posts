import { useEffect, useState } from 'react';
import { User } from '../types';
import { decodeToken } from '../utils';

const useAuth = () => {
  const [authUser, setAuthUser] = useState<User>({
    id: 0,
    email: '',
    role: '',
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('auth');

    if (authToken) {
      setAuthUser(decodeToken(authToken));
    }

    setLoading(false);
  }, []);

  return { authUser, setAuthUser, isLoading };
};

export default useAuth;
