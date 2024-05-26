import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  position: relative;
  margin-top: 30%;
  max-width: 335px;

  h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.21;
    color: var(--main-black);

    strong {
        color: var(--accent-color);
    }
  }

    picture {
        position: absolute;
        top: -58px;
        right: 25px;

        img {
            width: 95px;
            height: 93px;
        }
    }
`;
