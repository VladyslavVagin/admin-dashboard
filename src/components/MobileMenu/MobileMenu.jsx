import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileModal from "./MobileModal/MobileModal";
import LogoutBtn from "../Header/LogoutBtn/LogoutBtn";
import NavMenu from "./NavMenu/NavMenu";

const MobileMenu = ({ setIsShowMobileMenu }) => {
const isMobileTablet = useMediaQuery({ maxWidth: 1439.98 });

  return (
    <MobileModal setIsShowMobileMenu={setIsShowMobileMenu}>
      <NavMenu />
      {isMobileTablet && <LogoutBtn />}
    </MobileModal>
  );
};

export default MobileMenu;
