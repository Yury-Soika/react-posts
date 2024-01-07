import React, { useContext, useEffect, useState } from 'react';
import UserForm from '../components/common/UserForm';
import UserList from '../components/common/UserList';
import { NewUser, User } from '../types';
import { deleteUser, getAllUsers, registration } from '../services/UserService';
import MyButton from '../../../components/UI/button/MyButton';
import MyModal from '../../../components/UI/MyModal/MyModal';
import Loader from '../../../components/UI/Loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import { AuthContext } from '../../../context';

const Users: React.FC = () => {
  const { authUser } = useContext(AuthContext);

  const [users, setUsers] = useState<User[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
    const response = await getAllUsers(authUser.authToken);
    setUsers(response.data);
  });

  useEffect(() => {
    fetchUsers(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createUser = async (newUser: NewUser) => {
    try {
      await registration(newUser);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e.response.data.message);
    }

    await fetchUsers(users);
    setModal(false);
  };

  const removeUser = async (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    await deleteUser(authUser.authToken, user.id);
  };

  return (
    <div className='mx-64'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <UserForm create={createUser} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      {userError && <h1>Error: ${userError}</h1>}

      <UserList remove={removeUser} users={users} />

      {isUsersLoading && (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Users;
