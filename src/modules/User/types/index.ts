enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type User = {
  id: number;
  email: string;
  password: string;
  role?: Role;
};

export type NewUser = Omit<User, 'id'>;

export type UserListProps = {
  users: User[];
  remove: (user: User) => void;
};
