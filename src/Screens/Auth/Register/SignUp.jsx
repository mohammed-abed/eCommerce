import { FlexColLogin400px, ImageSignUp } from "../Login.Style";
import {
  Text,
  Hr,
  Text22PX,
  ErrorMsg,
  LoginContainer,
  HeadTitle,
  InputText,
  FlexRowLogin,
  FlexColLogin,
} from "../../../App.style";
import signup from "../../../Assets/Group 421.png";
import Button from "../../../Components/Button/Button";
import { Formik, Form } from "formik";
import { SignUpSchema } from "../Schema";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../Redux/User/UserActions";
import { Link } from "react-router-dom";
export default function SignUp() {
  const History = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;
  const handleSaveChange = async (userData) => {
    dispatch(signUpAction(userData, History));
  };

  return (
    <LoginContainer>
      <FlexRowLogin>
        <FlexColLogin>
          <HeadTitle>Signup.</HeadTitle>
          <Text fontSize="32px" color="#AEAEAE" marginA="0 0 52px">
            Sign up and get exclusive offers from us
          </Text>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={SignUpSchema()}
            onSubmit={handleSaveChange}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <Text22PX>Name</Text22PX>
                  <InputText
                    type="text"
                    name="name"
                    placeholder="your name .."
                  />
                  {errors.name && touched.name ? (
                    <ErrorMsg>{errors.name}</ErrorMsg>
                  ) : null}
                  <Text22PX>Enter your email address</Text22PX>
                  <InputText
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  {errors.email && touched.email ? (
                    <ErrorMsg>{errors.name}</ErrorMsg>
                  ) : null}
                  <Text22PX>Enter your password</Text22PX>
                  <InputText
                    type="password"
                    name="password"
                    placeholder="........."
                    size="50px"
                  />
                  {errors.password && touched.password ? (
                    <ErrorMsg>{errors.password}</ErrorMsg>
                  ) : null}
                  <Text22PX>Confirm your password</Text22PX>
                  <InputText
                    type="password"
                    name="passwordConfirm"
                    placeholder="........."
                    size="50px"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm ? (
                    <ErrorMsg>{errors.passwordConfirm}</ErrorMsg>
                  ) : null}
                  <Button
                    text="Sign up"
                    width="400px"
                    height="40px"
                    fontSize="22px"
                    margin="0 0 25px"
                    isLoading={isLoading}
                  ></Button>
                  {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                </Form>
              );
            }}
          </Formik>
          <FlexColLogin400px>
            <Hr height="3px" />
            <Text22PX color="#AEAEAE" weight="500">
              Have an account ?{" "}
              <Link
                to={"/login"}
                style={{ margin: "0 0 0 10px", color: "#242424" ,cursor:'pointer',textDecoration:"none"}}
              >
                Login
              </Link>
            </Text22PX>
          </FlexColLogin400px>
        </FlexColLogin>
        <ImageSignUp src={signup} />
      </FlexRowLogin>
    </LoginContainer>
  );
}
