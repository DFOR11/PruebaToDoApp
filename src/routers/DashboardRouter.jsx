import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { addUser, users, userTodos } from '../config/routes';
import { Dashboard } from '../pages/Home/Dashboard';
import { AddUser } from '../pages/Home/pages/addUser/AddUser';
import { UserTodos } from '../pages/Home/pages/userTodos/UserTodos';
import { Sidebar } from '../shared/Sidebar/Sidebar';

export const DashboardRouter = () => {
  console.log('hellow drouter');
  return (
    <>
      <Sidebar />
      <div className='content custom-scroll'>
        <Routes>
          <Route
            path={users()}
            element={<Dashboard />}
          />
          <Route path={userTodos()} element={<UserTodos />} />
          <Route path={addUser()} element={<AddUser />} />

          <Route path='*' element={<Navigate to={users()} />} />
        </Routes>
      </div>
    </>
  );
};
