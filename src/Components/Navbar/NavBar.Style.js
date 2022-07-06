import styled from "styled-components";
import { InnerSection, FlexRow, FlexCol } from "../../App.style";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export const NavbarContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  background: #242424 0% 0% no-repeat padding-box;
  width: 100%;
  /* position:fixed;
  z-index:2; */
`;
export const InnerNav = styled(InnerSection)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
`;
export const NavBox = styled(FlexRow)`
  width: auto;
  @media screen and (max-width: 1100px) {
    height: 30px;
  }
`;
export const NavBoxSearch = styled(NavBox)`
  background: #fff;
  border-radius : 6px;
  width: 33%;
  min-width: 250px;
`;
export const HeaderText = styled(Link)`
  color: #fff;
  font-size: 40px;
  text-decoration: none;
  font-weight: 700;
  @media screen and (max-width: 1100px) {
    font-size: 30px;
  }
`;
export const SpanNav = styled("span")`
  color: #1B998B;
`;
export const InputText = styled("input")`
  height: 40px;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding: 12px 26px;

  :focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 13px;
    color: #000;
  }
  @media screen and (max-width: 1100px) {
    height: 30px;
  }
`;
export const ButtonNav = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  width: 152px;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  background: #1B998B 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
  border: none;
  @media screen and (max-width: 1100px) {
    height: 30px;
  }
`;
export const Icon = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #1B998B;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
`;
export const SearchIconNav = styled(SearchIcon)`
  font-size: 18px;
  margin-right: 10px;
`;

export const SmallScreenMenu = styled(FlexCol)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 40px 20px;
  background: #000;
  z-index: 100;
  color: #1B998B !important;
  justify-content: start;

  animation: ease-in-out menu 500ms;

  @keyframes menu {
    0% {
      top: 100vh;
    }
    100% {
      top: 0px;
    }
  }
`;
export const StyledBox = styled(NavBox)`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const StyledMenu = styled(NavBox)`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;
