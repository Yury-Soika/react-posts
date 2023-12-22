export type Post = {
  id: number;
  title: string;
  body: string;
};

export type FilterType = {
  query: string;
  sort: keyof Post | null;
};

export type PostFilterProps = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
};

export type PostFormProps = {
  create: (newPost: Post) => void;
};

export type PostListProps = {
  posts: Post[];
  title: string;
  remove: (post: Post) => void;
};

export type PostItemProps = {
  post: Post;
  remove: (post: Post) => void;
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

export type Comment = {
  id: number;
  email: string;
  body: string;
};
