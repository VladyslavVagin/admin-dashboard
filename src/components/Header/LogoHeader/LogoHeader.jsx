import React from 'react';
import logo from "../../../assets/images/logo/logo.webp";
import logo2x from "../../../assets/images/logo/logo-2x.webp";
import logo3x from "../../../assets/images/logo/logo-3x.webp";
import { StyledLink } from './LogoHeader.styled';

const LogoHeader = () => {
  return (
    <StyledLink to={'/dashboard'}>
        <picture>
            <source srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
            <img src={logo} alt="Logo" />
        </picture>
    </StyledLink>
  )
}

export default LogoHeader;