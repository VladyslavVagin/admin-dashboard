import styled from "@emotion/styled";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  margin-top: 26px;

  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ButtonConfirm = styled.button`
  width: 146px;
  height: 44px;
  border-radius: 60px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  transition: background-color var(--hover-effect);

  &:hover,
  &:focus {
    background-color: var(--hover-accent);
  }

  @media screen and (min-width: 768px) {
    width: 133px;
    font-size: 14px;
  }
`;

export const ButtonCancel = styled.button`
  width: 146px;
  height: 44px;
  border-radius: 60px;
  background-color: var(--border-color);
  color: var(--placeholder-color);
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  transition: background-color var(--hover-effect);

  &:hover,
  &:focus {
    background-color: var(--icons-color);
  }

  @media screen and (min-width: 768px) {
    width: 133px;
    font-size: 14px;
  }
`;
