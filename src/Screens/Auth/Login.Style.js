import styled from "styled-components";
import { FlexCol, Image } from "../../App.style";

export const FlexColLogin400px = styled(FlexCol)`
  width: 400px;
`;

export const ImageLogin = styled(Image)`
  width: 800px;
  margin: 0 0 0 180px;
  @media screen and (max-width: 1100px) {
    width:50%;
  }
  @media screen and (max-width: 1800px) {
    width:40%;
    margin-top:50px;
  }
  @media screen and (max-width: 1000px) {
    display:none;
  }
`;

export const ImageSignUp = styled(Image)`
  width: 1170px;
  margin: 0 0 0 26px;
  @media screen and (max-width: 1100px) {
    width:50%;
  }
  @media screen and (max-width: 1800px) {
    width:40%;
    margin-top:50px;
    margin-top:200px;
  }
  @media screen and (max-width: 800px) {
    display:none;
  }
`;
