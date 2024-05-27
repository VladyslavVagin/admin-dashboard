import React from "react";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LogoHeader from "./LogoHeader/LogoHeader";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import { HeaderBox, HeaderMain } from "./Header.styled";

const Header = () => {
  return (
    <HeaderMain>
      <HeaderBox>
        <BurgerBtn />
        <LogoHeader />
        <HeaderTitle/>
      </HeaderBox>
    </HeaderMain>
  );
};

export default Header;
