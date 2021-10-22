import styled from "styled-components";
import {
  InnerSection,
  FlexColAlignStart,
  FlexRow,
  Span,
  Text,
  FlexColStartStart,
} from "../../App.style";

export const OrederContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;
export const InputText = styled("input")`
  height: 40px;
  width: 100%;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border: 1px solid #707070;
  padding: 12px 18px;
  margin-bottom: ${(props) => (props.marginB ? props.marginB : "41px")};
  font-weight: 700;
  color: #707070;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    color: #000;
    font-weight: 700;
  }
`;
export const FlexCol1516px = styled(FlexColAlignStart)`
  margin-top: 44px;
  width: 1516px;
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
  background: #fcdd06;
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
  width: 950px;
  background: #f2f2f2;
  height: 652px;
  padding: 45px 88px;
  border-radius: 16px;
`;

export const Text22 = styled(Text)`
  color: #70707095;
  font-weight: 700;
  font-size: "22px";
  border-bottom: 1px solid #707070;
`;

export const Textwidth30 = styled(Text22)`
  width: 30%;
  font-size: "16px";
  border: none;
`;
export const TextFlexEnd = styled(Textwidth30)`
  justify-content: flex-end;
`;
export const TextFlexEndBlack = styled(TextFlexEnd)`
  color:black;
`;
