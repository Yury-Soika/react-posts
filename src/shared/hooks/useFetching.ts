import { useState } from 'react';
import { FetchingCallback, FetchingResult } from '../types';

export const useFetching = (callback: FetchingCallback): FetchingResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching: FetchingCallback = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error, setIsLoading, setError];
};
