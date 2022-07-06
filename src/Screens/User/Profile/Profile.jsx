import {
  Text,
  FlexCol,
  FlexRow,
  Hr,
  FlexRowJustifyStart,
} from "../../../App.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataToProfileAction, logoutAction } from "../../../Redux/User/UserActions";
import Button from "../../../Components/Button/Button";
import photo from "../../../Assets/photo.jpeg";
import {
  Image,
  InnerCard,
  InnerCardSectionOne,
  InnerCardSectionTwo,
  Header,
} from "./Profile.Style";
import { placeOrder } from "../../../Redux/Orders/ordersActions";
import { useHistory } from "react-router";

export default function Profile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(getDataToProfileAction());
  }, [dispatch]);
  return (
    // handle Inner -flex-
    <InnerCard>
      <InnerCardSectionOne>
        <FlexRow style={{ justifyContent: "flex-start"}} >
          <Image
            src={photo}
            width={true}
            height={true}
            border={true}
            style={{ marginBottom: "30px" }}
          />
          <h3 style={{ fontSize: "32px" }}>{state.userDetails.user.name}</h3>
        </FlexRow>
        <Text weight="500" style={{ margin: "0 0 30px 15px" ,cursor:'pointer'}} fontSize="24px"
                onClick={() => dispatch(placeOrder(history))}>
          My Orders
        </Text>
        <Text weight="500" style={{ margin: "0 0 30px 15px" }} fontSize="24px">
          Notifcations
        </Text>
        <Hr />
        <Text
          fontWeight={true}
          style={{ margin: "0 0 30px 15px" ,cursor:'pointer'}}
          fontSize="24px"
          onClick={() => {
            dispatch(logoutAction());
            localStorage.removeItem("user");
          }}
        >
          {" "}
          Logout
        </Text>
      </InnerCardSectionOne>

      <InnerCardSectionTwo>
        <FlexCol width={"500px"} style={{ alignItems: "flex-start" }}>
          <Header>My Profile</Header>
          <FlexRowJustifyStart style={{ marginBottom: "45px" }}>
            <Text width="200px" weight="500" fontSize="24px">
              Name
            </Text>
            <Text weight="500" fontSize="24px">
              {state.userDetails.user.name}
            </Text>
          </FlexRowJustifyStart>
          <FlexRowJustifyStart style={{ marginBottom: "45px" }}>
            <Text width="200px" fontSize="24px" weight="500">
              Email
            </Text>
            <Text weight="500" fontSize="24px">
              {state.userDetails.user.email}
            </Text>
          </FlexRowJustifyStart>
          <FlexRowJustifyStart>
            <Button
              fontSize="13px"
              text={"Update Profile"}
              link={"/updateProfile"}
              width={"155px"}
              height={"35px"}
              style={{
                transform: "translate(0, 35px)",
              }}
            />
          </FlexRowJustifyStart>
        </FlexCol>
      </InnerCardSectionTwo>
    </InnerCard>
  );
}
