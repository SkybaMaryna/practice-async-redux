import { Modal } from 'components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from 'redux/Users/usersOperations';
import { selectCurrentUser } from 'redux/Users/usersSelectors';

export const UserDetailsPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const closeModal = () => {
    setUserId('');
  };

  return (
    <div>
      {currentUser && (
        <>
          <p>{currentUser.name}</p>
          <img src={currentUser.avatar} alt={currentUser.name} width="200" />
          <p>{currentUser.adress}</p>
          <p>{currentUser.phone}</p>
          <p>{currentUser.email}</p>
          <button
            onClick={() => {
              setUserId(currentUser.id);
            }}
          >
            Delete
          </button>
          {userId && <Modal id={userId} onClose={closeModal} />}
        </>
      )}
    </div>
  );
};
