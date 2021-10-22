import {
  Text22PX,
  InputTextForm,
  UpdateProfileContainer,
  HeadTitle,
  FlexRowLogin,
  FlexColLogin,
  ErrorMsg,
  SpinnerContainer,
} from "../../../App.style";
import Button from "../../../Components/Button/Button";
import { Formik, Form } from "formik";
// move from login to profile
import { UpdateProfileSchema } from "../../Auth/Schema";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDataToProfileAction,
  updateProfileAction,
} from "../../../Redux/User/UserActions";
export default function UpdateProfile() {
  const History = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;
  const handleSaveChange = async (userData) => {
    dispatch(updateProfileAction(userData, History));
  };
  useEffect(() => {
    dispatch(getDataToProfileAction());
  }, [dispatch]);


  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <UpdateProfileContainer>
      <FlexRowLogin>
        <FlexColLogin>
          <HeadTitle>My Profile</HeadTitle>
          <Formik
            initialValues={{
              name: state.userDetails.userProfile?.user?.name,
              email: state.userDetails.userProfile?.user?.email,
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={UpdateProfileSchema()}
            onSubmit={handleSaveChange}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <Text22PX>Name</Text22PX>
                  <InputTextForm
                    type="text"
                    name="name"
                    placeholder="your name .."
                  />
                  {errors.name && touched.name ? (
                    <ErrorMsg>{errors.name}</ErrorMsg>
                  ) : null}
                  <Text22PX>Enter your email address</Text22PX>
                  <InputTextForm
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  {errors.email && touched.email ? (
                    <ErrorMsg>{errors.name}</ErrorMsg>
                  ) : null}
                  <Text22PX>Enter your password</Text22PX>
                  <InputTextForm
                    type="password"
                    name="password"
                    placeholder="........."
                    size="50px"
                  />
                  {errors.password && touched.password ? (
                    <ErrorMsg>{errors.password}</ErrorMsg>
                  ) : null}
                  <Text22PX>Confirm your password</Text22PX>
                  <InputTextForm
                    type="password"
                    name="passwordConfirm"
                    placeholder="........."
                    size="50px"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm ? (
                    <ErrorMsg>{errors.passwordConfirm}</ErrorMsg>
                  ) : null}
                  <Button
                    text="Update Profile"
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
        </FlexColLogin>
      </FlexRowLogin>
    </UpdateProfileContainer>
  );
}
