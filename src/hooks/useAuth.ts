import { useEffect, useState } from 'react';
import { decodeToken } from '../utils';
import { AuthenticatedUser } from '../types';

const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthenticatedUser>({
    id: 0,
    email: '',
    role: '',
    authToken: '',
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem('auth');

    if (authToken) {
      setAuthUser({ ...decodeToken(authToken), authToken });
    }

    setLoading(false);
  }, []);

  return { authUser, setAuthUser, isLoading };
};

export default useAuth;
