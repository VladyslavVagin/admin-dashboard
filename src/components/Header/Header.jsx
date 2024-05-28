// @ts-nocheck
import React, { useState } from "react";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LogoHeader from "./LogoHeader/LogoHeader";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import MobileMenu from "../MobileMenu/MobileMenu";
import { HeaderBox, HeaderMain } from "./Header.styled";

const Header = () => {
const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  return (
    <HeaderMain>
      <HeaderBox>
        <BurgerBtn setIsShowMobileMenu={setIsShowMobileMenu}/>
        <LogoHeader />
        <HeaderTitle />
      </HeaderBox>
      <LogoutBtn />
      {isShowMobileMenu && <MobileMenu setIsShowMobileMenu={setIsShowMobileMenu}/>}
    </HeaderMain>
  );
};

export default Header;
