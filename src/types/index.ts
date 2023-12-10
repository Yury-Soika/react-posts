import {
  ButtonHTMLAttributes,
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostItemProps = {
  post: Post;
  remove: (post: Post) => void;
};

export type FilterType = {
  query: string;
  sort: keyof Post | null;
};

export type PostFilterProps = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

export type Option = {
  value: string | number;
  name: string;
};

export type MySelectProps = {
  options: Option[];
  defaultValue: string;
  value: string | number;
  onChange: (selectedValue: keyof Post | null) => void;
};

export type PostFormProps = {
  create: (newPost: Post) => void;
};

export type PostListProps = {
  posts: Post[];
  title: string;
  remove: (post: Post) => void;
};

export type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type MyInputProps = InputHTMLAttributes<HTMLInputElement>;

export type MyModalProps = {
  children: ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AuthContextProps = {
  isAuth: boolean;
  isLoading: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FetchingCallback = (...args: any[]) => Promise<void>;

export type FetchingResult = [
  FetchingCallback,
  boolean,
  string,
  Dispatch<SetStateAction<boolean>>,
  Dispatch<SetStateAction<string>>,
];

export type Comment = {
  id: number;
  email: string;
  body: string;
};
