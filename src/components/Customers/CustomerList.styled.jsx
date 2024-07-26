import styled from "@emotion/styled";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  transform: scale(0.8);

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;
