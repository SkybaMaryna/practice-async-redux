import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/Users/usersOperations';
import { selectUsers } from 'redux/Users/usersSelectors';

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);
  return <div>UsersPage</div>;
};
