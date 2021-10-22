import styled from "styled-components";
import {
  InnerSection,
  FlexRow,
  FlexCol,
  Span,
  Text22PX,
} from "../../App.style";
import { InputText } from "../../Components/ReviewOrder/ReviewOreder.Style";

export const ProductContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
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
export const InputProduct = styled(InputText)