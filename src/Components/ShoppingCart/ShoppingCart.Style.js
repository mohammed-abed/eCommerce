import styled from "styled-components";
import { InnerSection, FlexCol, Text, FlexRow, Image } from "../../App.style";

export const ShoppingCartContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;
export const Span = styled("span")`
  color: ${(props) => props.color};
`;
export const RIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid #1B998B;
  }
`;
export const FlexColContainer = styled(FlexCol)`
  background: #f2f2f2;
  min-height: 242px;
  height:auto;
  width: 100%;
  border-radius: 16px;
  @media screen and (max-width: 1800px) {
    padding:20px;
  }
`;
export const TextCard24px = styled(Text)`
  width: 30%;
  font-weight: 700;
  color: #242424;
  margin: 51px 0 119px 0;
  font-size: 24px;
  @media screen and (max-width: 1600px) {
    width: 100%;
    margin-bottom:20px;
  }
`;
export const FlexRow204pxW = styled(FlexRow)`
  width: 15%;
  height: 40px;
  background: #fff;
  @media screen and (max-width: 1500px) {
    width: 30%;
    /* margin-bottom:20px; */
  }
`;
export const TextCenter = styled(Text)`
  width: 108px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;
export const ImageCard = styled(Image)`
  width: 304px;
  height: 203px;
`;
export const FleCol120pxW = styled(FlexCol)`
  width: 120px;
  margin: 0 35px 0 120px;
`;
export const TextEnd = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: line-through;
  justify-content: flex-end;
  margin: 0 0 9px 0;
  color: #707070;
  width: 120px;
`;
export const TextEndBlack = styled(TextEnd)`
  font-size: 30px;
  color: #000;
  text-decoration: none;
`;
export const TextEndBlackMargin = styled(TextEndBlack)`
  margin: 0 35px 0 120px;
`;
export const CardContainerResp = styled(FlexRow)`
  justify-content:space-between;
  width:100%;
  flex-wrap:wrap;
`