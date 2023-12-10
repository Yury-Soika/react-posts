import { Option } from '../types';

export const LIMIT_PER_PAGE = 10;

export const selectOptions: Option[] = [
  { value: 'title', name: 'By title' },
  { value: 'body', name: 'By description' },
];
