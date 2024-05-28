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
const Customers = React.lazy(() => import("../pages/Customers/Customers"));
const Products = React.lazy(() => import("../pages/Products/Products"));
const Orders = React.lazy(() => import("../pages/Orders/Orders"));
const Suppliers = React.lazy(() => import("../pages/Suppliers/Suppliers"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
  dispatch(refreshUser());
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<Login />} />} />
        <Route path="/" element={ <PrivateRoute redirectTo="/login" component={SharedLayout} />}>
          <Route index path="/dashboard" element={ <PrivateRoute redirectTo="/login" component={Dashboard} />} />
          <Route index path="/orders" element={ <PrivateRoute redirectTo="/login" component={Orders} />} />
          <Route index path="/products" element={ <PrivateRoute redirectTo="/login" component={Products} />} />
          <Route index path="/suppliers" element={ <PrivateRoute redirectTo="/login" component={Suppliers} />} />
          <Route index path="/customers" element={ <PrivateRoute redirectTo="/login" component={Customers} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
