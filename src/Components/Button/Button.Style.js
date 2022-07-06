import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomeButton = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  background: ${(props) => (props.isGray ? "#F2F2F2" : "#1B998B")};
  background: ${(props) => props.bgcolor};
  color: #242424;
  color:${(props) => props.color};
  font-weight: ${(props) => (props.weight ? "700" : "500")};
  width: ${(props) => (props.width ? props.width : "324px")};
  height: ${(props) => (props.height ? props.height : "62px")};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 10)}px;
  border: ${(props) => (props.border ? props.border : "none")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  ${
    (props)=>props.disabled
      ? `
        background:gray;
        color:white;
        cursor: none;
  `
      : ""}
`
