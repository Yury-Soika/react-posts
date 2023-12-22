import {
  ButtonHTMLAttributes,
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';

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
