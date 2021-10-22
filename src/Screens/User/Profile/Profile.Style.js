import styled from "styled-components";
import { FlexCol, FlexRow } from "../../../App.style";

export const Image = styled("img")`
  width: ${(props) => (props.width ? "137" : "198")}px;
  height: ${(props) => (props.height ? "137" : "198")}px;
  border: ${(props) => (props.border ? " 4px solid #FCDD06" : "none")};
  border-radius: 50%;
  margin: 20px 20px 0 15px;
`;
export const InnerCard = styled(FlexRow)`
  max-width: 1640px;
  width: 100%;
  height:400px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 129px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    margin-top: 50px;
    max-width: 80%;
  }
`;
export const InnerCardSectionOne = styled(FlexCol)`
  justify-content: flex-start;
  align-items: flex-start;
  height:100%;
  background: #f2f2f2;
  border-radius: 16px;
  width: 500px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;
export const InnerCardSectionTwo = styled(FlexRow)`
  width: 950px;
  justify-content: space-between;
  align-items: flex-start;
  background: #f2f2f2;
  padding: 0 0 35px 35px;
  margin-left: 32px;
  border-radius: 16px;
  height:100%;
  @media screen and (max-width: 1300px) {
    width: 100%;
    margin: 30px 0 0 0;
    flex-direction: column-reverse;
  }
`;
export const Header = styled("h3")`
  margin: 44px 0 60px 0;
  font-size: 32px;
`;
