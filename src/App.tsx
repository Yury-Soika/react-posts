import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/Navbar/Navbar';
import AppRouter from './shared/router';
import { AuthContext } from './shared/context';
import useAuth from './shared/hooks/useAuth';

const App = () => {
  const { authUser, setAuthUser, isLoading } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
