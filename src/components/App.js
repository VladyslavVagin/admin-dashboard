// @ts-nocheck
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import SharedLayout from "./SharedLayout/SharedLayout";
import Login from "../pages/Login/Login";

const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
  dispatch(refreshUser());
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<Login />} />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/dashboard" element={ <PrivateRoute redirectTo="/login" component={Dashboard} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
