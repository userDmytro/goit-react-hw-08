import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import { TextField, Box } from '@mui/material';

export default function Searchbox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <TextField
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={filter}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />
    </Box>
  );
}