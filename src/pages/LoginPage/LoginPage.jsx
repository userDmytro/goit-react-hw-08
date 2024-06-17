import { Box } from '@mui/material';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;