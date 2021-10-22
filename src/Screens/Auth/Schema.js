import * as yup from "yup";

export const LoginSchema = () =>
  yup.object({
    email: yup
      .string()
      .email("Please Enter a Valid Email ..")
      .required("Please Enter a Email .."),
    password: yup.string().min(5).required("Please Enter a Password .."),
  });

export const SignUpSchema = () =>
  yup.object({
    name: yup.string().required("Please Enter a Name ..").min(10),
    email: yup
      .string()
      .email("Please Enter a Valid Email ..")
      .required("Please Enter a Email .."),
    password: yup.string().min(6).required("Please Enter a Password .."),
    passwordConfirm: yup
      .string()
      .min(6)
      .required("Please Enter a Password ..")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

export const UpdateProfileSchema = () =>
  yup.object({
    name: yup.string().required("Please Enter a Name ..").min(10),
    email: yup.string().email("Please Enter a Valid Email .."),
    password: yup.string().min(6),
    passwordConfirm: yup
      .string()
      .min(6)
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
