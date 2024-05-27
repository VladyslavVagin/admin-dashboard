import React from 'react';
import pillMobile from '../../../assets/images/login/pill-mobile.webp';
import pillMobile2x from '../../../assets/images/login/pill-mobile-2x.webp';
import pillMobile3x from '../../../assets/images/login/pill-mobile-3x.webp';
import pillTablet from '../../../assets/images/login/pill-tablet.webp';
import pillTablet2x from '../../../assets/images/login/pill-tablet-2x.webp';
import pillTablet3x from '../../../assets/images/login/pill-tablet-3x.webp';
import pillDesktop from '../../../assets/images/login/pill-desktop.webp';
import pillDesktop2x from '../../../assets/images/login/pill-desktop-2x.webp';
import pillDesktop3x from '../../../assets/images/login/pill-desktop-3x.webp';
import { TitleContainer } from './Title.styled';

const Title = () => {
  return (
    <TitleContainer>
          <h1>Your medication,<br/> delivered Say goodbye <br/> to all <strong>your healthcare</strong><br/> worries with us</h1><picture>
              <source media="(min-width: 1440px)" srcSet={ `${pillDesktop} 1x, ${pillDesktop2x} 2x, ${pillDesktop3x} 3x` } type="image/webp" />
              <source media="(min-width: 768px)" srcSet={ `${pillTablet} 1x, ${pillTablet2x} 2x, ${pillTablet3x} 3x` } type="image/webp" />
              <source media="(max-width: 767.98px)" srcSet={ `${pillMobile} 1x, ${pillMobile2x} 2x, ${pillMobile3x} 3x` } type="image/webp" />
              <img src={ pillMobile } alt="Pill" />
          </picture>
    </TitleContainer>
  )
}

export default Title