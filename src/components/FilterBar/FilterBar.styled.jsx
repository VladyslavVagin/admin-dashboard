import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  margin: 40px 0 20px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;

  button {
    width: 112px;
    height: 44px;
    border-radius: 60px;
    border: none;
    outline: none;
    background: var(--accent-color);
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const Label = styled.label`
  width: 215px;
  height: 44px;

  input {
    width: 100%;
    height: 100%;
    border-radius: 60px;
    border: 1px solid var(--border-color);
    box-shadow: 0 -1px 5px 0 rgba(71, 71, 71, 0.05);
    background: var(--white-color);
    padding-left: 18px;

    &::placeholder {
      color: var(--placeholder-color);
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
    }
  }
`;
