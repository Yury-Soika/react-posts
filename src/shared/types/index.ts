import {
  ButtonHTMLAttributes,
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';

export type AuthenticatedUser = {
  id: number;
  email: string;
  role: string;
  authToken: string;
};

export type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type MyInputProps = InputHTMLAttributes<HTMLInputElement>;

export type MyModalProps = {
  children: ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AuthContextProps = {
  authUser: AuthenticatedUser;
  isLoading: boolean;
  setAuthUser: Dispatch<SetStateAction<AuthenticatedUser>>;
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

export type FormProps<T> = {
  create: (newItem: T) => void;
};

export type ItemProps<T> = {
  item: T;
  remove: (item: T) => void;
};
