import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import { LoadingDiv, MainSection } from "./SharedLayout.styled";
import Loader from "../Common/Loader/Loader";

const SharedLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <MainSection>
          {isDesktop && <SideBar />}
          <Suspense fallback={<LoadingDiv><Loader/></LoadingDiv>}>
            <Outlet />
          </Suspense>
        </MainSection>
        <ToastContainer />
      </LocalizationProvider>
    </>
  );
};

export default SharedLayout;
