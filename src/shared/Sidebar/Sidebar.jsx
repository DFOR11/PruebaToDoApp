import React, { useContext } from 'react';
import { navbarLinks } from './sidebarLinks';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { login } from '../../config/routes';
import { AuthContext } from '../../auth/authContext';

export const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate(login(), {
      replace: true,
    });
  };
  return (
    <nav className='navbar'>
      <h2>ToDo App</h2>
      <div className='navbar-content'>
        <ul>
          {navbarLinks.map((val, index) => (
            <NavLink key={'navbar-item-' + index} className={({ isActive }) => 'navlink ' + (isActive ? 'active' : '')} to={val.link}>
              <span> {val.title}</span>
            </NavLink>
          ))}
        </ul>
      </div>
      <button className='btn-logout' onClick={handleLogout}>
        LogOut
      </button>
    </nav>
  );
};
