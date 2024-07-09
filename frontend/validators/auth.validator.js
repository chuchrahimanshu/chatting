import * as yup from "yup";

export const signUpValidationSchema = yup.object({
  firstName: yup
    .string()
    .trim("First name is missing!")
    .required("First name is required!")
    .matches(/^[A-Za-z]+$/, "Please provide a valid name"),
  lastName: yup
    .string()
    .trim("Last name is missing!")
    .required("Last name is required!")
    .matches(/^[A-Za-z]+$/, "Please provide a valid name"),
  email: yup
    .string()
    .trim("Email is missing!")
    .required("Please provide a valid email address")
    .email("Please provide a valid email address"),
  password: yup.string().required("Please provide a valid password"),
  confirmPassword: yup.string().required("Confirm password is required"),
});

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .trim("Email is missing!")
    .required("Please provide a valid email address")
    .email("Please provide a valid email address"),
  password: yup.string().required("Please provide a valid password"),
});

export const forgetPasswordValidationSchema = yup.object({
  otp: yup
    .string()
    .trim("OTP is missing!")
    .required("Please provide a valid OTP")
    .length(6, "OTP must be of 6 characters"),
  password: yup.string().required("Please provide a valid password"),
  confirmPassword: yup.string().required("Confirm password is required"),
});
