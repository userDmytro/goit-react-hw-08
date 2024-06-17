import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Button, Typography, Box } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Box>
  );
};