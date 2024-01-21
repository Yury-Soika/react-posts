import axios, { AxiosResponse } from 'axios';
import { NewPost, Post } from '../types';
import { API_URL } from '../../shared/constants';

export const getAllPosts = async (): Promise<AxiosResponse<Post[]>> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts`);
  return response;
};

export const getPostById = async (id: string): Promise<AxiosResponse<Post>> => {
  const response = await axios.get<Post>(`${API_URL}/${id}`);
  return response;
};

export const createNewPost = async (
  post: NewPost,
): Promise<AxiosResponse<Post>> => {
  const response = await axios.post<Post>(`${API_URL}/posts`, post);
  return response;
};

export const deletePost = async (id: string): Promise<AxiosResponse<Post>> => {
  const response = await axios.delete<Post>(`${API_URL}/posts/${id}`);
  return response;
};
