// @ts-nocheck
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LogoHeader from "./LogoHeader/LogoHeader";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import MobileMenu from "../MobileMenu/MobileMenu";
import { HeaderBox, HeaderMain } from "./Header.styled";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  return (
    <HeaderMain>
      <HeaderBox>
        <BurgerBtn setIsShowMobileMenu={setIsShowMobileMenu} />
        <LogoHeader />
        <HeaderTitle />
      </HeaderBox>
      {isDesktop && <LogoutBtn />}
      {isShowMobileMenu && (
        <MobileMenu setIsShowMobileMenu={setIsShowMobileMenu} />
      )}
    </HeaderMain>
  );
};

export default Header;
