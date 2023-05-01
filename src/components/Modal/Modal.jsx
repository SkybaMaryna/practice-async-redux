import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'redux/Users/usersOperations';

export const Modal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <>
      <div>Are you sure?</div>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onClose}>No</button>
    </>
  );
};
