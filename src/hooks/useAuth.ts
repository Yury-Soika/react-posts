import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return { isAuth, setIsAuth, isLoading };
};

export default useAuth;
