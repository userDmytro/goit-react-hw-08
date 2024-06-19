import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { FeedbackSchema, formatPhoneNumber } from "../../validation";
import {
  selectActiveContactId,
  selectContacts,
  selectIsModalOpen,
} from "../../redux/contacts/selectors";
import { clearActiveContactId, toggleModal } from "../../redux/contacts/slice";
import { handleKeyPress } from "../../handleKeyPress";

import style from "./EditContactForm.module.css";

const EditContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const isOpen = useSelector(selectIsModalOpen);
  const activeContactId = useSelector(selectActiveContactId);
  const contacts = useSelector(selectContacts);

  const activeContact =
    contacts.find((contact) => contact.id === activeContactId) || {};

  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleModal());
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({
        id: activeContactId,
        name: values.username,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Successfully updated!", { position: "top-center" });
        dispatch(clearActiveContactId());
        dispatch(toggleModal());
      })
      .catch(() => {
        toast.error("Error, input correct data", {
          position: "top-center",
        });
      });
    actions.resetForm();
  };

  return (
    <Modal
      className={style.modal}
      isOpen={isOpen}
      onRequestClose={handleCancel}
      contentLabel="Edit Contact Form"
    >
      <Formik
        initialValues={{
          username: activeContact.name || "",
          number: activeContact.number || "",
        }}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
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
              />
              <ErrorMessage
                name="number"
                component="span"
                className={style.errorMessage}
              />
            </div>
            <div className={style.buttonContainer}>
              <button type="submit" className={style.submitButton}>
                Edit
              </button>
              <button
                type="button"
                className={style.submitButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Form>
          )}
      </Formik>
    </Modal>
  );
};

export default EditContactForm;