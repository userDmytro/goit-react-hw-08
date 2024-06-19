import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { FeedbackSchema, formatPhoneNumber } from "../../validation";
import { handleKeyPress } from "../../handleKeyPress";

import style from "./ContactForm.module.css";


const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username,
          number: values.number,
        };
        dispatch(addContact(newContact))
          .unwrap()
          .then(() => {
            toast.success("Successfully add!", { position: "top-center" });
          })
          .catch(() => {
            toast.error("Error, input correct data", {
              position: "top-center",
            });
          });
        actions.resetForm();
      }}
    >
      {({ setFieldValue, values }) => (
      <Form className={style.formContainer}>
        <label htmlFor={nameFieldId} className={style.label}>
          Username
        </label>
        <div className={style.wrap}>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={style.errorMessage}
          />
        </div>

        <label htmlFor={phoneFieldId} className={style.label}>
          Phone
        </label>
        <div className={style.wrap}>
          <Field
            type="text"
            onKeyPress={handleKeyPress}
            name="number"
            id={phoneFieldId}
              className={style.inputField}
              onChange={(e) => {
                const formattedPhoneNumber = formatPhoneNumber(e.target.value);
                setFieldValue("number", formattedPhoneNumber);
              }}
              value={values.number}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.errorMessage}
          />
        </div>

        <button type="submit" className={style.submitButton}>
          Add contact
        </button>
        </Form>
        )}
    </Formik>
  );
};

export default ContactForm;
