import axios, { AxiosResponse } from 'axios';
import { NewUser, User } from '../types';
import { API_URL } from '../../../constants';

export const authentication = async (user: User): Promise<AxiosResponse> => {
  const response = await axios.post<User>(`${API_URL}/auth/login`, user);
  return response;
};

export const registration = async (user: NewUser): Promise<AxiosResponse> => {
  const response = await axios.post<User>(`${API_URL}/auth/registration`, user);
  return response;
};

export const getAllUsers = async (
  authToken: string,
): Promise<AxiosResponse<User[]>> => {
  const response = await axios.get<User[]>(`${API_URL}/users`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  return response;
};

export const deleteUser = async (
  authToken: string,
  id: number,
): Promise<AxiosResponse<User[]>> => {
  const response = await axios.delete<User[]>(`${API_URL}/users/${id}`, {
    headers: {
      authorization: `Bearer ${authToken}`,
    },
  });
  return response;
};
