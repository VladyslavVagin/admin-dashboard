// @ts-nocheck
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import SharedLayout from "./SharedLayout/SharedLayout";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<Login />}/>}  />
        <Route path="/" element={<SharedLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
