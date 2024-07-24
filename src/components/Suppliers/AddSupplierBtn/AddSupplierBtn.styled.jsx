import styled from "@emotion/styled";

export const AddBtn = styled.button`
  background-color: transparent;
  width: 177px;
  height: 44px;
  border: 1px solid rgba(89, 177, 122, 0.5);
  outline: none;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--main-dark);

  @media screen and (min-width: 768px) {
    width: 196px;
    font-size: 14px;
    transition: all var(--hover-effect);

    &:hover,
    &:focus {
      color: var(--white-color);
      background-color: var(--accent-color);
    }
  }
`;
