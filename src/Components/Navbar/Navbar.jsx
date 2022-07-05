import { MenuOutlined } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Text } from "../../App.style";
import { useState } from "react";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  InputText,
  ButtonNav,
  HeaderText,
  SpanNav,
  Icon,
  SearchIconNav,
  SmallScreenMenu,
  StyledMenu,
  StyledBox,
  NavBoxSearch,
} from "./NavBar.Style";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { logoutAction } from "../../Redux/User/UserActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocationWithQuery } from "react-router-query-hooks";

export function Navbar({ state }) {
  const dispatch = useDispatch();
  const Style = {
    fontSize: 25,
    color: "#FFF",
    fill: "#FFF",
    margin: "auto 0 10px 0",
    cursor: "pointer",
  };
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;
  const [value, setValue] = useState(keyword ? keyword : "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {isMenuOpen && (
        <SmallScreenMenu>
          <CloseIcon
            onClick={handleCloseMenu}
            style={{ color: "#fcdd06", cursor: "pointer" }}
          />
          <NavBox>
            <HeaderText to={"/"} onClick={handleCloseMenu}>
              <SpanNav>Pro</SpanNav>Shop
            </HeaderText>
          </NavBox>
          <Icon
            to={state.userDetails.user._id ? "/profile" : "/login"}
            onClick={handleCloseMenu}
          >
            <PersonIcon style={Style} />
            {state.userDetails.user._id ? (
              <Text fontSize={"13px"} color={"#fff"}>
                Profile
              </Text>
            ) : (
              <Text fontSize={"13px"} color={"#fff"}>
                Login / Sign up
              </Text>
            )}
          </Icon>

          <Icon to={"/soppingCarts"} onClick={handleCloseMenu}>
            <span>{state.cart.cart.length}</span>
            <ShoppingCartIcon
              style={{ ...Style, transform: "translate(0, -4px)" }}
            />
            <Text
              fontSize={"13px"}
              color={"#fff"}
              style={{
                transform: "translate(0, -4px)",
              }}
            >
              Cart
            </Text>
          </Icon>
          {state.userDetails.user._id && (
            <Icon
              to={"/"}
              style={{ marginTop: "auto" }}
              onClick={() => {
                dispatch(logoutAction());
                localStorage.removeItem("user");
              }}
            >
              <ExitToAppIcon style={Style} />
              <Text fontSize={"13px"} color={"#fff"}>
                Logout
              </Text>
            </Icon>
          )}
        </SmallScreenMenu>
      )}

      <NavbarContainer>
        <InnerNav>
          <NavBox>
            <HeaderText to={"/"}>
              <SpanNav>Electro</SpanNav>Shop
            </HeaderText>
          </NavBox>
          <NavBoxSearch>
            <InputText
              type="text"
              value={value}
              placeholder="Search"
              onChange={(e) => setValue(e.target.value)}
            />
            <ButtonNav
              onClick={() => {
                history.push(`/search${value ? `?keyword=${value}` : ""}`);
              }}
            >
              <SearchIconNav />
              search
            </ButtonNav>
          </NavBoxSearch>
          <StyledBox>
            <Icon to={state.userDetails.user._id ? "/profile" : "/login"}>
              <PersonIcon style={Style} />
              {state.userDetails.user._id ? (
                <Text fontSize={"13px"} color={"#fff"}>
                  Profile
                </Text>
              ) : (
                <Text fontSize={"13px"} color={"#fff"}>
                  Login / Sign up
                </Text>
              )}
            </Icon>

            <Icon to={"/soppingCarts"}>
              <span
                style={{
                  transform: "translate(0, -7px)",
                }}
              >
                {state.cart.cart.length}
              </span>
              <ShoppingCartIcon
                style={{ ...Style, transform: "translate(0, -7px)" }}
              />
              <Text
                fontSize={"13px"}
                color={"#fff"}
                style={{
                  transform: "translate(0, -7px)",
                }}
              >
                Cart
              </Text>
            </Icon>
            {state.userDetails.user._id && (
              <Icon
                to={"/"}
                onClick={() => {
                  dispatch(logoutAction());
                  localStorage.removeItem("user");
                }}
              >
                <ExitToAppIcon style={Style} />
                <Text fontSize={"13px"} color={"#fff"}>
                  Logout
                </Text>
              </Icon>
            )}
          </StyledBox>
          <StyledMenu>
            <MenuOutlined style={Style} onClick={handleOpenMenu} />
          </StyledMenu>
        </InnerNav>
      </NavbarContainer>
    </>
  );
}
