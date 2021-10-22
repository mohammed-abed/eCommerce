import styled from "styled-components";
import {
  FlexCol,
  FlexRow,
  InnerSection,
  Text,
  FlexRowEnd,
  FlexColAlignStart,
} from "../../App.style";

export const SpecificationContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 1800px) {
    padding: 0 20px 0 20px;
  }
`;

export const RIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 2px solid #fcdd06;
  }
`;
export const SpecificationDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: "space-between";
  width: 97%;
  margin: 5px;
  border-radius: 10px;
  :nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
export const DotSpan = styled("span")`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 50%;
  margin: 20px 60px 0 0;
  :hover {
    width: 50px;
    height: 50px;
    border: 2px solid #6b7b73;
  }
`;
export const SpanColor = styled("span")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 30px;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  background: #f5f5f5;
  font-weight: 700;
  color: #5d5d5d;
  :nth-child(even) {
    background: #000;
    color: #d6d6d6;
  }
`;
export const Text16px = styled(Text)`
  color: #707070;
  width: 50%;
  height: 62px;
  align-items: center;
  padding: 0 35px;
  font-weight: 700;
`;
export const FlexColStartMargin = styled(FlexCol)`
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  margin: 32px 0;
`;
export const Text24px = styled(Text)`
  margin: 0 0 56px 0;
  font-size: 24px;
`;
export const FlexCol1134px = styled(FlexCol)`
  width: 1134px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;
  @media screen and (max-width: 1500px) {
    width:100%;
  }
`;
export const FlexCol470pxW = styled(FlexCol)`
  width: 470px;
  height: auto;
  margin-right: 25px;
  @media screen and (max-width: 1500px) {
    width:50%;
    margin:20px;
  }
`;
export const FlexColWhite = styled(FlexCol)`
  align-items: flex-start;
  border: 1px solid #bcbcbc;
  padding: 0 51px 15px 51px;
`;
export const FlexColMargin = styled(FlexColAlignStart)`
  margin: 63px 0;
`;
export const FlexColMarginTop = styled(FlexColAlignStart)`
  margin: 63px 0 0 0;
`;
export const FlexColBorder = styled(FlexColAlignStart)`
  border: 2px solid #bcbcbc;
  padding: 34px 51px 15px 51px;
`;
export const FlexRowMarginTop = styled(FlexRowEnd)`
  margin-top: 60px;
  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
  }
`;
export const FlexRowStartEnd = styled(FlexRow)`
  justify-content: flex-start;
  align-items: flex-end;
  height: 62px;
`;
export const FlexCol120pxW = styled(FlexCol)`
  width: 120px;
  margin: 0 35px 0 120px;
`;
export const FlexCol200pxW = styled(FlexCol)`
  width: 200px;
  margin: 40px 0;
`;
export const FlexRow40pxH = styled(FlexRow)`
  align-items: flex-start;
  height: 60px;
  justify-content: start;
`;
export const FlexColMargin30 = styled(FlexCol)`
  align-items: flex-start;
  margin: 30px 0;
`;
export const FlexRow204pxW = styled(FlexRow)`
  height: 40px;
  width: 204px;
  border:1px solid #FCDD06;
`;
export const FlexRowWidth = styled(FlexRow)`
  justify-content: flex-start;
  width: 50%;
`;
export const FlexRowMargin = styled(FlexRow)`
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const TextReviewTitle = styled(Text)`
  color: #707070;
  font-size: 24px;
  align-items: center;
  margin: 34px 0 16px 0;
`;
export const TextReviewDate = styled(Text)`
  color: #70707070;
  font-size: 16px;
  width: 50%;
  justify-content: flex-end;
  font-weight: 700;
`;
export const TextReviewDescription = styled(Text)`
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  height: 152px;
  align-items: center;
  background: #f2f2f2;
  margin: 0 0 10px 0;
  padding: 20px 35px;
  width: 100%;
  align-items: start;
`;
export const ProductInfo = styled(FlexRow)`
  align-items: flex-start;
  @media screen and (max-width: 1800px) {
    flex-direction:column;
  }
`
export const AddToCart = styled(FlexRow)`
  @media screen and (max-width: 1000px) {
    flex-direction:column;
  }
`
export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 20px;
  resize: vertical;
`;

export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  min-height: 60px;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 16px;
`;
