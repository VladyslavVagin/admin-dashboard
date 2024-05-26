import React from 'react';
import pillMobile from '../../../assets/images/login/pill-mobile.webp';
import pillMobile2x from '../../../assets/images/login/pill-mobile-2x.webp';
import pillMobile3x from '../../../assets/images/login/pill-mobile-3x.webp';
import { TitleContainer } from './Title.styled';

const Title = () => {
  return (
    <TitleContainer>
          <h1>Your medication,<br/> delivered Say goodbye <br/> to all <strong>your healthcare</strong><br/> worries with us</h1><picture>
              <source media="(max-width: 767.98px)" srcSet={ `${pillMobile} 1x, ${pillMobile2x} 2x, ${pillMobile3x} 3x` } type="image/webp" />
              <img src={ pillMobile } alt="Pill" />
          </picture>
    </TitleContainer>
  )
}

export default Title