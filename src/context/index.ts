import { createContext } from 'react';
import { AuthContextProps } from '../types';

export const AuthContext = createContext<AuthContextProps>({
  authUser: { id: 0, email: '', role: '', authToken: '' },
  isLoading: false,
  setAuthUser: () => {},
});
