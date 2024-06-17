import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { Box } from '@mui/material';

const RegisterPage = () => {
  return (
    // <div>
    //   <h1> </h1>
    //   <RegistrationForm />
    // </div>
    <Box display="flex" justifyContent="center" mt={4}>
    <RegistrationForm />
  </Box>
  );
};

export default RegisterPage;