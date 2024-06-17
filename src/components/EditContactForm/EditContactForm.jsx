import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { updateContact } from '../../redux/contacts/operations';

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateContact({ id: contact.id, updates: values }));
        setSubmitting(false);
        onClose();
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxWidth={400} mx="auto">
            <TextField
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            <TextField
              id="number"
              name="number"
              label="Number"
              value={values.number}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;