import styled from "@emotion/styled";
import bgImg from "../../assets/images/login/shapes-desktop.webp";
import bgImg2x from "../../assets/images/login/shapes-desktop-2x.webp";

export const Container = styled.section`
  max-width: 375px;
  width: 100%;
  padding: 0 20px 30vh 20px;
  margin: 0 auto;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: 135px 120%;
  background-size: contain;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px 30vh 32px;
    background-position: 375px 120%;
  }

  @media screen and (min-width: 1440px){
    max-width: 1440px;
    padding: 0 100px 30vh 100px;
    background-position: 720px 45dvh;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgImg2x});
  }
`;
