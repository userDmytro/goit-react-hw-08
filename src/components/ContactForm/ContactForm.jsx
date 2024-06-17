import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { TextField, Button, Box, Typography } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
  });

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact(values));
          resetForm();
          toast.success('Contact added successfully!');
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxWidth={400} mx="auto">
              <Typography variant="h6">Add New Contact</Typography>
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
                Add Contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;