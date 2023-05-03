import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser, updateUser } from 'redux/Users/usersOperations';
import { selectCurrentUser } from 'redux/Users/usersSelectors';
import { useNavigate } from 'react-router-dom';

export const UpdateUserPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [user, setUser] = useState(currentUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUser(user));
    if (user.id) {
      navigate(`/users/${user.id}`);
    }
  };

  return (
    <>
      {user && (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="adress"
              value={user.adress}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              type="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Img
            <input
              type="url"
              name="avatar"
              value={user.avatar}
              onChange={handleChange}
            />
          </label>
          <button>Save</button>
        </form>
      )}
    </>
  );
};
