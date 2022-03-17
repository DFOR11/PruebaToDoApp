import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login } from '../config/routes';
import { Login } from '../pages/login/Login';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={login()}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
