import React from 'react';
import logoLogout from '../../../assets/images/logo-login/logo-login.webp';
import logoLogout2x from '../../../assets/images/logo-login/logo-login-2x.webp';
import logoLogout3x from '../../../assets/images/logo-login/logo-login-3x.webp';
import { LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to={'/'}>
        <picture>
            <source srcSet={`${logoLogout3x} 3x, ${logoLogout2x} 2x, ${logoLogout} 1x`} type='image/webp'/>
            <img src={logoLogout} alt="Logo E-Pharmacy" />
        </picture>
        <p>E-Pharmacy</p>
    </LogoLink>
  )
}

export default Logo;