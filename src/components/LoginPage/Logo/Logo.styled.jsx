import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 14px;
  margin-top: 24px;

  picture {
    width: 44px;
    height: 44px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: var(--main-black);
  }
`;
