import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import { MainSection } from "./SharedLayout.styled";

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      <Header />
      <MainSection>
        {isDesktop && <SideBar />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainSection>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
