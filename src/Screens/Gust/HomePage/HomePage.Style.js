import styled from "styled-components";
import { FlexCol, FlexRow, FlexBox, Text } from "../../../App.style";
export const HeroBox = styled(FlexRow)`
  justify-content: space-between;
  height: 590px;
  @media screen and (max-width: 1100px) {
    height: auto;
    min-height: 590px;
    flex-direction: column-reverse;
  }
`;

export const SideBox = styled(FlexCol)`
  width: 40%;
  align-items: start;
  height: 100%;
  @media screen and (max-width: 1100px) {
    width: 80%;
    height: 45%;
    margin-top: 20px;
  }
`;

export const HeroTitle = styled("h1")`
  font-size: 50px;
  letter-spacing: 2.4px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
`;

export const SubTitle = styled("h2")`
  font-size: 32px;
  letter-spacing: 1.28px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
  margin-bottom: 20px;
`;

export const SectionBox = styled(FlexRow)`
  justify-content: space-between;
  height: 590px;
  align-items: center;
  height: auto;
`;
export const DotSpan = styled("span")`
  width: ${(props) => (props.width ? "25px" : "14px")};
  height: ${(props) => (props.height ? "25px" : "14px")};
  background: ${(props) => (props.isGray ? "#70707030" : "#fcdd06")} 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  margin: ${(props) => (props.margin ? "0 10px" : "0 0 0 10px")};
  cursor: pointer;
`;
export const DotSpanSlider = styled("span")`
  width: 25px;
  height: 25px;
  background: ${(props) => (props.isGray ? "#70707030" : "#fcdd06")} 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
`;
export const DotSpanSection = styled("span")`
  width: 14px;
  height: 14px;
  background: ${(props) => (props.isGray ? "#70707030" : "#fcdd06")} 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  margin: 0 0 0 10px;
  cursor: pointer;
`;

export const Arrow = styled(FlexBox)`
  font-size: 35px;
  margin: 0 23px;
  color: #000;
  width: 30px;
  font-weight: 700;
  cursor: pointer;

  ${(props) => (props.isLeft ? "transform:rotate(-180deg)" : "")}
`;
export const FlexCol380x392margin = styled(FlexCol)`
  margin-left: 40px;
`;
export const FlexBox380x346 = styled(FlexBox)`
  width: 380px;
  height: 346px;
  background: #f7f8fc;
  border-radius: 15px;
`;
export const Text24 = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
  @media screen and (max-width: 1100px) {
    font-size:18px;
  }
`;

export const FlexCol370px = styled(FlexCol)`
  height: 370px;
  margin: 20px 0 60px 0;
`;
export const TextRecently = styled(Text24)`
  color: #242424;
  width: 100%;
  margin: 49px 0 30px 0;
  @media screen and (max-width: 1100px) {
    font-size:16px;
  }
`;
export const FlexBoxContainer = styled(FlexBox)`
/* border:5px solid; */
  @media screen and (max-width: 1800px) {
    /* flex-wrap:wrap; */
  }
`
export const FlexCol380x392 = styled(FlexCol)`
  width: 20%;
  height: 392px;
`;
