import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px){
    width: 40px;
    height: 40px;
    margin-left: -16px;
  }

  @media screen and (min-width: 1440px){
    margin-left: 0px;
  }
`;
