import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { login } from "../../validation";
import toast from "react-hot-toast";

import style from "./LoginForm.module.css";


const LoginForm = () => {
  const dispatch = useDispatch();

  const mailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={login}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        dispatch(logIn(userData)).unwrap()
          .then(() => {
            toast.success("Success!", { position: "top-center" });
          })
          .catch(() => {
            toast.error("Error, invalid login or password!", {
              position: "top-center",
            });
          });
        actions.resetForm();
      }}
    >
      <Form className={style.formContainer}>
        <label htmlFor={mailFieldId} className={style.label}>
          Email
        </label>
        <div className={style.wrap}>
          <Field
            type="email"
            name="email"
            id={mailFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={style.errorMessage}
          />
        </div>

        <label htmlFor={passwordFieldId} className={style.label}>
          Password
        </label>
        <div className={style.wrap}>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={style.errorMessage}
          />
        </div>

        <button type="submit" className={style.submitButton}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
