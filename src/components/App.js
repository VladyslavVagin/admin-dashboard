// @ts-nocheck
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Login = lazy(() => import('../pages/Login/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

function App() {
  return (
    <>
     <Routes>
        <Route path="/login" element={<Login />} />
       <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
       </Route>
     </Routes>
    </>
  );
}

export default App;
