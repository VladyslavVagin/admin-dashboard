import styled from "@emotion/styled";

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 0px;
  }
`;
