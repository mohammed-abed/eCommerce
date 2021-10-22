import React from "react";
import { Route } from "react-router";
import { lazy } from "react";

// key from 200 to 299
const Profile = lazy(() => import("../../Screens/User/Profile/Profile"));
const Payment = lazy(() => import("../../Screens/User/payment/Payment"));
const UpdateProfile = lazy(() => import("../../Screens/User/Profile/UpdateProfile"));
const Orders = lazy(() => import("../../Screens/User/Order/Orders"));
const OrderId = lazy(() => import("../../Screens/User/Order/OrderId"));
function UserRouter(props) {
  return [
    <Route key={200} path={"/profile"} exact={true} component={Profile} />,
    <Route
    key={201}
      path={"/proceedCheckout/shippingAddress"}
      exact={true}
      component={Payment}
    />,
    <Route
    key={202}
      path={"/proceedCheckout/placeOrder"}
      exact={true}
      component={Payment}
    />,
    <Route key={203} path={"/updateProfile"} exact={true} component={UpdateProfile} />,
    <Route key={204} path={"/order"} exact={true} component={Orders} />,
    <Route key={205} path={"/order/:id"} exact={true} component={OrderId} />,
  ];
}

export default UserRouter;
