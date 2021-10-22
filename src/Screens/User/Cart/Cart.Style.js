import styled from "styled-components";
import { FlexCol,  FlexRow } from "../../../App.style";

export const Span = styled("span")`
  color: ${(props) => props.color};
`;
export const FlexCol1640px = styled(FlexCol)`
  width: 85%;
  margin-bottom: 117px;
  @media screen and (max-width: 1300px) {
    align-items:center;
  }
`;
export const ContainerCard = styled(FlexRow)`
  align-items:flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1800px) {
    flex-direction:column;
  }
`
export const FlexCol75 = styled(FlexCol)`
  width:75%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`