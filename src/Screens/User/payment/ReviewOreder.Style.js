import styled from "styled-components";
import {
  InnerSection,
  FlexColAlignStart,
  FlexRow,
  Span,
  Text,
  FlexColStartStart,
  FlexCol,
  FlexRowJustifyStart,
  InputText,
} from "../../../App.style";

export const OrederContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 1800px) {
    padding:0 20px 0 20px ;
  }
`;

export const FlexCol1516px = styled(FlexColAlignStart)`
  margin-top: 44px;
  width: 100%;
  height: auto;
`;
export const FlexRow55 = styled(FlexRow)`
  align-items: center;
  width: 55%;
  margin-bottom: 36px;
`;
export const SpanOrder = styled(Span)`
  width: 40px;
  font-weight: 700;
  height: 40px;
  background: #fcdd0680;
  font-size: 22px;
  justify-content: center;
  align-items: center;
`;
export const SpanOrder2 = styled(SpanOrder)`
  background: #1B998B;
  color: #000;
`;

export const FlexRow250px = styled(FlexRow)`
  width: 250px;
  height: 2px;
  background: #f2f2f2;
  justify-content: center;
  margin: 0 20px 0 0;
`;
export const FlexCol950px = styled(FlexColStartStart)`
  width: 70%;
  background: #f2f2f2;
  height: auto;
  padding: 45px 88px;
  border-radius: 16px;
  margin-bottom:30px;
  @media screen and (max-width: 1100px) {
    width:100%;
    padding:45px 20px;
  }
`;

export const Text22 = styled(Text)`
  color: #70707095;
  font-weight: 700;
  font-size: 22px;
  border-bottom: 1px solid #707070;
`;

export const Textwidth30 = styled(Text22)`
  width: 30%;
  font-size: 16px;
  border: none;
`;
export const TextFlexEnd = styled(Textwidth30)`
  justify-content: flex-end;
`;
export const TextFlexEndBlack = styled(TextFlexEnd)`
  color: black;
`;
export const ErrorMsg = styled("span")`
  color: red;
  margin-top: 10px;
`;
export const SpanShipping = styled(Span)`
  width: 40px;
  font-weight: 700;
  height: 40px;
  background: ${(props) => (props.isOpacity ? "#FDEB6A" : "#1B998B")};
  color: ${(props) => (props.isOpacity ? "#8B8979" : "#000")};
  font-size: 22px;
  justify-content: center;
  align-items: center;
`;
export const TextShipping = styled(Text)`
  color: ${(props) => (props.isOpacity ? "#8B8979" : "#000")};
`;
export const SpanPlaceOrder = styled(SpanShipping)`
  background: ${(props) => (props.isOpacity ? "#A9A9A9" : "#1B998B")};
  color: ${(props) => (props.isOpacity ? "#fff" : "#000")};
`;
export const TextPlaceOrder = styled(Text)`
  color: ${(props) => (props.isOpacity ? "#70707080" : "#000")};
`;

export const Hr = styled("div")`
  width: 30%;
  height: 1px;
  background: ${(props) => (props.isOpacity ? "#70707080" : "#1B998B")};
  justify-content: center;
  margin: 0 20px 0 0;
  @media screen and (max-width: 800px) {
    display:none;
  }
`;
export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  height: auto;
  height: auto;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 40px;
  border-radius: 16px;
  font-weight: 500;
`;
export const FlexCol470px = styled(FlexCol)`
  height: 470px;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 44px 0 0 0;
`;
export const FlexCol380px = styled(FlexColStartStart)`
  background: #f2f2f2;
  height: 380px;
  margin: 0 0 30px 0;
  padding: 31px 0 50px 31px;
  border-radius: 16px;
`;
export const FlexRowMargin30 = styled(FlexRowJustifyStart)`
  margin: 0 0 30px 0;
`;
export const Text16Color = styled(Text)`
  font-weight: 700;
  color: #929292;
  width: 80%;
`;
export const TextLineHeight = styled(Text16Color)`
  width: 400px;
  line-height: 2;
  margin: 0 0 30px 0;
`;
export const Text567px = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
  width: 567px;
  margin: 0;
`;
export const Review = styled(FlexRow)`
  align-items:center;
  width:55%;
  margin:0 0 36px;
  @media screen and (max-width: 800px) {
    flex-direction:column;
    margin:0;
  }
`
export const FlexRowContainer = styled(FlexRow)`
justify-content: flex-start;
@media screen and (max-width: 800px) {
    margin-bottom:30px;
  }
`;

export const ContainerPlaceOrder = styled(FlexRow)`
  justify-content:flex-start;
  align-items:flex-start;
  @media screen and (max-width: 1500px) {
    padding:0 20px 0 20px ;
    flex-direction:column;
  }
`

export const FormikBox = styled(FlexRow)`
  justify-content:flex-start;
  align-items:flex-start;
  @media screen and (max-width: 1800px) {
    padding:0 20px 0 20px ;
    flex-direction:column;
  }  
`
export const SlideRightFormik = styled(FlexCol)`
  justify-content:flex-start;
  align-items: flex-start;
  width:70%;
  background:#F2F2F2;
  min-height:350px;
  height:auto;
  padding:45px 88px 45px 45px ;
  border-radius:16px;
  margin-bottom:30px;
  @media screen and (max-width: 1500px) {
    width:100%;
  }
`
export const InputBox = styled(FlexRow)`
  justify-content:space-between;
  align-items:Flex-start;
  min-height: 120px;
  height:auto;
  @media screen and (max-width: 1000px) {
    flex-direction:column;
    width:100%;
  }
`
export const InputField = styled(InputText)`
  @media screen and (max-width: 1000px) {
    width:100%;
    margin-bottom:20px;
  }
`
export const TowField = styled(FlexCol)`
  width:48%;
  align-items:flex-start;
  @media screen and (max-width: 1000px) {
    width:100%;
  }
`
export const SlideLeftFormik = styled(FlexCol)`
  justify-content:flex-start;
  align-items: flex-start;
  width:25%;
  background:#F2F2F2;
  min-height:652px;
  height:auto;
  border-radius:16px;
  margin: 0 0 0 30px;
  @media screen and (max-width: 1800px) {
    width:50%;
    margin:0;
  }
  @media screen and (max-width: 1000px) {
    width:100%;
  }
`

export const ContainerButton = styled(FlexRow)`
  justify-content:flex-end;
  margin:30px 0;
  width:97%;
  @media screen and (max-width: 1700px) {
    width:100%;
    justify-content:flex-start;
    padding:0 0 0 30px;
  }
`
export const OrderDetails = styled(FlexCol)`
  justify-content:flex-start;
  align-items: flex-start;
  width:25%;
  background:#F2F2F2;
  height:280px;
  border-radius:16px;
  margin: 0 0 0 30px;
  @media screen and (max-width: 1500px) {
    width:60%;
    margin :0;
  }
  @media screen and (max-width: 1000px) {
    width:80%;
    margin:0;
  }
`
export const FlexRowButton = styled(FlexRow)`
  justify-content: flex-end;
  margin:40px 0;
  @media screen and (max-width: 1700px) {
    justify-content:flex-start;
  }
`;
