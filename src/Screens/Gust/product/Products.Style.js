import styled from "styled-components";
import {
  InnerSection,
  FlexRow,
  FlexCol,
  Text,
  Span,
  Text22PX,
  FlexBox,
} from "../../../App.style.js";

export const ProductContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
`;
export const FlexColProduct = styled(FlexCol)`
  border-radius: 16px;
  justify-content: flex-start;
  margin: 50px 0 133px 0;
`;
export const FlexRowProduct = styled(FlexRow)`
  justify-content: space-between;
  margin: 0 0 60px 0;
`;
export const ProductDiv = styled("div")`
  width: 100%;
  border-radius: 10px;
  :nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
export const TextArea = styled("textarea")`
  width: 861px;
  height: 130px;
  resize: none;
  border: 1px solid #707070;
  margin-bottom: 30px;
  padding: 12px 18px;
  font-weight: 700;
  :focus {
    outline: none;
  }
  border-radius: 10px;
  background: #f2f2f2;
`;
export const TextProduct = styled(Text)`
  color: #707070;
  font-size: 24px;
  font-weight: 700;
  width: ${(props) => (props.width ? "10%" : "20%")};
  height: 62px;
  padding: 0 35px;
  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }
`;
export const TextProduct22px = styled(TextProduct)`
  align-items: center;
  font-weight: 500;
  font-size: 22px;
`;
export const FlexRowIcon = styled(FlexRow)`
  width: 10%;
  height: 62px;
  padding: 0 35px;
  justify-content: flex-start;
`;
export const FlexColCreateProduct = styled(FlexCol)`
  margin: 44px 0 0 0;
  align-items: flex-start;
  width: 1364px;
`;
export const FlexRowCreateProduct = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  height: 678px;
  border-radius: 16px;
  margin: 30px 0 0 0;
  background: #f2f2f2;
  padding: 66px 22px;
`;
export const AddIcon = styled(Span)`
  font-size: 50px;
  font-weight: 500;
  border: 2px dashed #707070;
  justify-content: center;
  align-items: center;
  width: 102px;
  height: 93px;
`;

export const FlexRowEnd = styled(FlexRow)`
  justify-content: flex-end;
  margin: 30px 0;
`;
export const TextProduct22PX = styled(Text22PX)`
  color: #707070;
  margin: 0 0 16px;
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
`;
export const FlexCol346pxH = styled(FlexCol)`
  height: 346px;
  margin: 40px 0;
  border: 2px dashed #707070;
`;
export const FlexCol378pxW = styled(FlexCol)`
  width: 378px;
`;
export const FlexCol866pxW = styled(FlexCol)`
  width: 866px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FlexColStart = styled(FlexCol)`
  align-items: flex-start;
  width: 48%;
`;
export const FlexBoxBackground = styled(FlexBox)`
  align-items: start;
  background: #f7f8fc;
`;
export const VR = styled("div")`
  height: 588px;
  width: 1px;
  background-color: #707070;
  opacity: 0.3;
  margin: ${(props) => (props.margin ? "0 21.5px" : "0")};
`;
export const TopRate = styled(FlexBox)`
  @media screen and (max-width: 1900px) {
    padding: 0 20px 0 20px;
  }
`;
export const Result = styled("h2")`
  font-size: 24px;
  letter-spacing: 1.28px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
  margin-bottom: 20px;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  animation: type 1.5s steps(60, start);

  @keyframes type {
    from {
      width: 0;
    }
  }
  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;
export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#1B998B")};
  color: #000;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 0 auto;
`;
