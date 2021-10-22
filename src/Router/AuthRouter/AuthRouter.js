import { Route } from "react-router";
import { lazy } from "react";

// key from 100 to 199

const Login = lazy(() => import("../../Screens/Auth/Login/Login"));
const SignUp = lazy(() => import("../../Screens/Auth/Register/SignUp"));
function AuthRouter(props) {
  return [
    <Route key={100} exact={true} path={"/login"} component={Login} />,
    <Route key={101} path={"/register"} component={SignUp} />,
  ];
}

export default AuthRouter;
