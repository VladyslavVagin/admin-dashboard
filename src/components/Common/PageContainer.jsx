import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding: 0 20px;
  max-width: 375px;
  width: 100%;
  margin: 80px auto 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px){
    max-width: 1360px;
    padding: 0 80px;
  }
`;
