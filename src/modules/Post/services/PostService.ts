import axios, { AxiosResponse } from 'axios';
import { Comment, Post } from '../types';
import { LIMIT_PER_PAGE } from '../../../constants';

export const getAllPosts = async (
  page: number,
): Promise<AxiosResponse<Post[]>> => {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        _limit: LIMIT_PER_PAGE,
        _page: page,
      },
    },
  );
  return response;
};

export const getPostById = async (id: string): Promise<AxiosResponse<Post>> => {
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response;
};

export const getCommentsByPostId = async (
  id: string,
): Promise<AxiosResponse<Comment[]>> => {
  const response = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  return response;
};
