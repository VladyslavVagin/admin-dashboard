import styled from "@emotion/styled";

export const Form = styled.form`
    margin-top: 40px;
    margin-bottom: 30%;
    max-width: 335px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 14px;

    label {
        width: 100%;

        input {
            width: 100%;
            height: 44px;
            border-radius: 60px;
            border: 1px solid var(--border-color);
            padding-left: 18px;
        }
    }

    @media screen and (min-width: 768px){
        margin-top: 50px;
        max-width: 323px;
    }
`

export const SubmitBtn = styled.button`
    width: 100%;
    height: 44px;
    border-radius: 60px;
    background-color: var(--accent-color);
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    outline: none;
    border: none;
    cursor: pointer;
    transition: background-color var(--hover-effect);

    &:hover {
        background-color: var(--hover-accent);
    }
`