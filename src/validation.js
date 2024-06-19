import * as Yup from "yup";

export const regist = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export const login = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^\d{0,3}-?\d{0,2}-?\d{0,2}(-?\d{0,3})?$/, "Invalid phone number format"),
});
export const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const match = phoneNumber.match(/^(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})?$/);
  if (match) {
    return match.slice(1).filter(Boolean).join("-");
  }
  return "";
};
