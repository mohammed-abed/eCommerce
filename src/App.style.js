import { Field } from "formik";
import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;
export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  /* border:2px solid red; */
  align-items: center;
  width: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  background: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
export const Text = styled("p")`
  display: flex;
  font-size: ${(props) => props.fontSize};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? "700" : "500")};
  margin-right: ${(props) => props.margin};
  margin: ${(props) => props.marginA};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgcolor};
  margin-top: ${(props) => props.marginTop};
  text-decoration: ${(props) => (props.decoration ? "line-through" : "none")};
  width: ${(props) => props.width};
  line-height: ${(props) => props.lineHeight};
  height: ${(props) => props.height};
  border-bottom: ${(props) => props.borderB};
`;
export const Text22PX = styled(Text)`
  font-size: 22px;
  margin: 0 0 10px;
  @media screen and (max-width: 1100px) {
    font-size:16px;
  }
`;
export const BackgroundFlexBox = styled(FlexBox)`
  background: #000;
`;
export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  /* border:2px solid red; */
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
  /* border:2px solid green; */
  margin-left: ${(props) => (props.margin ? "40px" : "0")};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;
export const InnerSection = styled(FlexCol)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  @media screen and (max-width: 1800px) {
    padding:0 20px 0 20px;
  }
  @media screen and (max-width: 1100px) {
    height: auto;
  }
`;
export const InnerSection678px = styled(InnerSection)`
  height: 678px;
`;
export const InnerCard = styled(FlexRow)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  margin: ${(props) => props.margin};
  /* border:2px solid blue; */
`;
export const Image = styled("img")`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border-radius: 16px; */
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  /* border:2px solid green */
`;
export const Hr = styled("div")`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "1px")};
  background-color: #707070;
  opacity: 0.3;
  margin-bottom: ${(props) =>
    props.marginButtom ? props.marginButtom : "30px"};
`;
export const Span = styled("span")`
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background: ${(props) => props.bgcolor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  font-weight: ${(props) => props.weight};

  /* text-decoration:underline */
`;

export const FlexRowBetween = styled(FlexRow)`
  justify-content: space-between;
`;
export const FlexRowStartBetween = styled(FlexRowBetween)`
  align-items: flex-start;
`;
export const FlexRowEnd = styled(FlexRow)`
  justify-content: flex-end;
`;
export const FlexRowStart = styled(FlexRow)`
  align-items: flex-start;
`;
export const FlexColStart = styled(FlexCol)`
  justify-content: flex-start;
`;
export const FlexRowJustifyStart = styled(FlexRow)`
  justify-content: flex-start;
`;
export const FlexColAlignStart = styled(FlexCol)`
  align-items: flex-start;
`;
export const FlexColstartStart = styled(FlexColStart)`
  align-items: flex-start;
`;
export const FlexColStartBetween = styled(FlexColAlignStart)`
  justify-content: space-between;
`;
export const FlexRowStartStart = styled(FlexRowStart)`
  justify-content: flex-start;
`;
export const FlexColAlignEnd = styled(FlexCol)`
  align-items: flex-end;
`;
export const FlexBox100px = styled(FlexBox)`
  width: 40%;
`;
export const FlexBox100pxmargin43 = styled(FlexBox100px)`
  margin-top: 43px;
`;
export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
`;
export const FlexRowStartCenter = styled(FlexRow)`
  justify-content: flex-start;
  align-items:center;
`;
export const InnerSectionStart = styled(InnerSection)`
  align-items: flex-start;
  margin: 60px 0;
`;
export const FlexRowBorder = styled(FlexRow)`
  border: 2px solid #fcdd06;
  border-radius: 16px;
  margin-bottom: 30px;
  padding: 40px 0;
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
    padding:40px;
  }
`;
export const FlexCol1640px = styled(FlexCol)`
  width: 1640px;
  margin-bottom: 117px;
`;

export const FlexCol1640 = styled(FlexCol1640px)`
  margin-bottom: 79px;
`;
export const FlexCol1226px = styled(FlexCol)`
  width: 1226px;
`;
export const FlexCol384px = styled(FlexCol)`
  width: 384px;
  background: #f2f2f2;
  height: 351px;
  border-radius: 16px;
`;
export const FlexColStartStart = styled(FlexColstartStart)`
  height: 60%;
  padding: 0 40px;
`;
export const InnerSectionMargin = styled(InnerSection)`
  margin: 60px 0 119px 0;
`;
export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #fcdd06;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const HrDiv = styled("div")`
  width: 200px;
  height: 7px;
  background-color: #fcdd06;
  position: relative;
  top: 1px;
  /* background-image: linear-gradient(to right , #FCDD06 0px,#FCDD06 200px,transparent 200px,transparent); */
  z-index: 1;
`;
export const SubTitle = styled("h2")`
  font-size: 32px;
  letter-spacing: 1.28px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
  margin-bottom: 20px;
`;

export const InputText = styled(Field)`
  height: 40px;
  width: 100%;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border: 1px solid #707070;
  padding: 12px 18px;
  /* margin-bottom: ${(props) => (props.marginB ? props.marginB : "41px")}; */
  color: #707070;
  margin-bottom:25px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.size};
  }
`;
export const LoginContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 30px;
`;
export const UpdateProfileContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 1300px) {
    width: 80%;
    align-items:center;
  }
`;
export const HeadTitle = styled("h1")`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const InputTextForm = styled(Field)`
  height: 40px;
  width: 400px;
  border-radius: 6px;
  opacity: 1;
  padding: 15px 11px;
  margin-bottom: 30px;
  font-size: 15px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.size};
    color: #000;
    color: #70707070;
  }
`;
export const FlexRowLogin = styled(FlexRow)`
  margin: 44px 0 78px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const FlexColLogin = styled(FlexCol)`
  width: 500px;
  background: #fff;
  align-items: flex-start;
`;
export const ErrorMsg = styled("span")`
  color: red;
`;