import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  position: relative;
  margin-top: 30%;
  max-width: 335px;

  @media screen and (min-width: 768px){
    max-width: 614px;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.21;
    color: var(--main-black);

    @media screen and (min-width: 375px){
      font-size: 28px;
    }

    @media screen and (min-width: 768px){
      font-size: 54px;
      line-height: 1.11;
    }

    strong {
      color: var(--accent-color);
    }
  }

  picture {
    position: absolute;
    top: -58px;
    right: 25px;

    img {
      width: 85px;
      height: 83px;
    }

    @media screen and (min-width: 768px){
      top: -115px;

      img {
        width: 179px;
        height: 175px;
      }
    }
  }
`;
