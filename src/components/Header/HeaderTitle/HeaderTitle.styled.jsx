import styled from "@emotion/styled";

export const HeaderTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--main-black);
  }

  p {
    color: var(--placeholder-color);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px){
    h1 {
      font-size: 24px;
      line-height: 1.17;
    }
  }
`;
