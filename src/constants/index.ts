import { Option } from '../modules/Post/types';

export const LIMIT_PER_PAGE = 10;

export const API_URL = 'http://localhost:3000';

export const selectOptions: Option[] = [
  { value: 'title', name: 'By title' },
  { value: 'body', name: 'By description' },
];
