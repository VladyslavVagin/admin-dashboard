import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SharedLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
