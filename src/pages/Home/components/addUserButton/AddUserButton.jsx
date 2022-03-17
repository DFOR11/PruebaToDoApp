import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUserButton.css';

export const AddUserButton = () => {
  const navigate = useNavigate();

  const addNewUser = () => {
    navigate('/new-user', {
      replace: true,
    });
  };
  return (
    <button className='add-user-btn' onClick={addNewUser}>
      <span>+</span>
      Add new user
    </button>
  );
};
