import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(register(values));
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxWidth={400} mx="auto">
            <Typography variant="h4">Register</Typography>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="name" component="div" />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="email" component="div" />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              fullWidth
            />
            <ErrorMessage name="password" component="div" />
            {authError && <Alert severity="error">{authError.message || 'An error occurred'}</Alert>}
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;