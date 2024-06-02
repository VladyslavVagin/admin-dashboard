import styled from "@emotion/styled";

export const HeaderMain = styled.header`
  padding: 0 20px;
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  width: 100%;
  background-color: var(--bg-main);
  z-index: 100;

  @media screen  and (min-width: 1440px){
    padding: 0 40px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  padding: 17px 0;

  @media screen and (min-width: 375px) {
    column-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 60px;
    padding: 15px 0;
  }
`;
