import axios, { AxiosResponse } from 'axios';
import { User } from '../types';
import { API_URL } from '../../../constants';

export const authentication = async (user: User): Promise<AxiosResponse> => {
  const response = await axios.post<User>(`${API_URL}/auth/login`, user);
  return response;
};
