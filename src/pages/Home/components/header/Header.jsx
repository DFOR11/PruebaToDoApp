import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <p className='header__title'>Dashboard</p>

      <div className='header__user-container'>
        <img className='user-container__img' src='https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg' alt='' />
        <p className='user-container__name'>Marlene sasoeur</p>
      </div>
    </div>
  );
};
