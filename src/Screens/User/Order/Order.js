import styled from "styled-components";
import { FlexRow, FlexCol } from "../../../App.style";
import { Link } from "react-router-dom";

export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  height: auto;
  color: red;
  height: auto;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 16px;
  font-weight: 500;
`;

export const ListBox = styled(FlexCol)`
  justify-content: start;
  align-items: start;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  margin-top: 30px;
  padding: 20px;
`;

export const StyledRow = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid lightgray;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: start;
  cursor: pointer;
  color: inherit;
  text-decoration:none;
  font-weight:700;
  &:hover {
    background: #dedddd;
  }
 
  @media screen and (max-width: 1100px) {
    font-size:14px;
    padding:20px 0px ;
  }
  @media screen and (max-width: 800px) {
    font-size:10px;
    padding:20px 0px ;
  }
`;

export const RowCell = styled(FlexRow)((props) => ({
  width: props.width ? props.width : "15%",
  justifyContent: "start",
  color: props.isCompleted ? "green" : "inherit",
}));
export const OrderDetail = styled(FlexCol)`
  align-items: flex-start;
  min-height: 229px;
`;

export const OrderDetails = styled(FlexCol)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 280px;
  padding: 40px 25px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;
export const Shipping = styled(FlexCol)`
  width: 950px;
  min-height: 400px;
  justify-content: space-between;
  padding: 40px 70px;
  background-color: #f2f2f2;
  border-radius: 16px;
  @media screen and (max-width: 1500px) {
    width:80%;
    margin-bottom:40px;
    padding: 40px 30px;
  }
  @media screen and (max-width: 800px) {
    width:100%;
    margin-bottom:40px;
    padding: 40px 30px;
  }
`;

export const ShippingAddress = styled(FlexCol)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 154px;
`;
export const Order = styled(FlexCol)`
  width: 30%;
  margin-left: 30px;
  background:#F2F2F2;
  border-radius:16px;
  @media screen and (max-width: 1100px) {
    margin:0;
    width:80%;
    align-items:flex-start;
  }
`;
export const Container = styled(FlexRow)`
  width: 100%;
  margin-top:60px;
  justify-content: flex-start;
  align-items:flex-start;
  @media screen and (max-width: 1420px) {
    flex-direction:column;
  }
`;
