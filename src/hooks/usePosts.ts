import { useMemo } from 'react';
import { Post } from '../types';

export const usePosts = (
  posts: Post[],
  sort: keyof Post | null,
  query: string,
): Post[] => {
  const sortedAndSearchedPosts = useMemo(() => {
    const sortedPosts = sort
      ? [...posts].sort((a, b) => {
          const valueA = a[sort] ?? '';
          const valueB = b[sort] ?? '';

          if (typeof valueA === 'string' && typeof valueB === 'string') {
            return valueA.localeCompare(valueB);
          }

          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        })
      : posts;

    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [posts, sort, query]);

  return sortedAndSearchedPosts;
};
