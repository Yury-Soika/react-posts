import axios, { AxiosResponse } from 'axios';
import { Post } from '../types';
import { API_URL } from '../../../constants';

export const getAllPosts = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  page: number,
): Promise<AxiosResponse<Post[]>> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response;
};

export const getPostById = async (id: string): Promise<AxiosResponse<Post>> => {
  const response = await axios.get<Post>(`${API_URL}/${id}`);
  return response;
};

export const createNewPost = async (
  post: Post,
): Promise<AxiosResponse<Post>> => {
  const response = await axios.post<Post>(`${API_URL}/posts`, post);
  return response;
};

export const deletePost = async (id: string): Promise<AxiosResponse<Post>> => {
  const response = await axios.delete<Post>(`${API_URL}/posts/${id}`);
  return response;
};
