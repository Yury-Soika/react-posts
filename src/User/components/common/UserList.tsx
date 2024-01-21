import React from 'react';
import UserItem from './UserItem';
import { UserListProps } from '../../types';

const UserList: React.FC<UserListProps> = ({ users, remove }) => {
  if (!users.length) {
    return <h1 style={{ textAlign: 'center' }}>Users not found!</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} remove={remove} item={user} />
      ))}
    </div>
  );
};

export default UserList;
