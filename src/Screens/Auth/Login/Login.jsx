import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import {
  FlexRow,
  Hr,
  Text,
  Text22PX,
  InputTextForm,
  LoginContainer,
  HeadTitle,
  FlexRowLogin,
  FlexColLogin,
  ErrorMsg,
  FlexCol,
} from "../../../App.style";
import { ImageLogin } from "../Login.Style";
import { LoginSchema } from "../Schema";
import login from "../../../Assets/Group 240.png";
import Button from "../../../Components/Button/Button";
import { loginAction, handleError } from "../../../Redux/User/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { useEffect } from "react";
import { useLocationWithQuery } from "react-router-query-hooks";

export default function Login() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;
  const handleSaveChange = async (userData, History) => {
    dispatch(
      loginAction(
        userData,
        History,
        pathname ? `${pathname}?review=${review}&rating=${rating}` : ""
      )
    );
  };

  const locationQuery = useLocationWithQuery();
  const {
    query: { pathname, review, rating },
  } = locationQuery;

  useEffect(() => {
    dispatch(handleError());
  }, [dispatch]);

  return (
    <LoginContainer>
      <FlexRowLogin>
        <FlexColLogin>
          <HeadTitle>Login.</HeadTitle>
          <Text fontSize="32px" color="#AEAEAE" marginA="0 0 52px">
            Login with your data that you entered during registration
          </Text>
          <Text22PX>Enter your email address</Text22PX>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema()}
            onSubmit={handleSaveChange}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <InputTextForm
                    type={"email"}
                    name={"email"}
                    placeholder={"Email"}
                    required={true}
                  ></InputTextForm><br/>
                  {errors.email && touched.email ? (
                    <ErrorMsg>{errors.email}</ErrorMsg>
                  ) : null}
                  <InputTextForm
                    type={"password"}
                    name={"password"}
                    placeholder={"Password"}
                  ></InputTextForm><br/>
                  {errors.password && touched.password ? (
                    <ErrorMsg>{errors.password}</ErrorMsg>
                  ) : null}
                  {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                  <Button
                    text="Login"
                    isLoading={isLoading}
                    width="400px"
                    height="40px"
                    fontSize="22px"
                    margin="0 0 20px"
                  ></Button>
                </Form>
              );
            }}
          </Formik>

          <FlexCol style={{ width: "400px" }}>
            <FlexRow>
              <CheckBoxOutlinedIcon
                style={{ fontSize: "22px", margin: "0 5px 10px " }}
              />
              <Text22PX color="#AEAEAE">Remember me </Text22PX>
            </FlexRow>
            <Text22PX style ={{margin:"10px 0 20px 0" }}color="#6F6F6F">
              Forgot your password?
            </Text22PX>
            <Hr height="2px" />
            <Button
              link={"/register"}
              text="Sign up now"
              width="220px"
              height="56px"
              borderRadius="20"
              bgcolor="#FFFFFF"
              border="2px solid #FCDD06"
              margin="20px 0 0 0 "
            ></Button>
          </FlexCol>
        </FlexColLogin>
        <ImageLogin src={login} />
      </FlexRowLogin>
    </LoginContainer>
  );
}
