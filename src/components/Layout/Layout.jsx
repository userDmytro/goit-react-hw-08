import { Container } from '@mui/material';
import AppBar from '../AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};