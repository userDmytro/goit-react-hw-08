import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ListItem, ListItemText, IconButton, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import toast from 'react-hot-toast';
import EditContactForm from '../EditContactForm/EditContactForm';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setOpenDelete(false);
    toast.success('Contact deleted successfully!');
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="edit" onClick={handleClickOpenEdit}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={handleClickOpenDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        }
        sx={{ 
          borderBottom: '1px solid #ccc', 
          padding: '10px 0' 
        }}
      >
        <ListItemText
          primary={
            <Box display="flex" alignItems="center" gap={1}>
              <IoPerson />
              <Typography variant="body1" component="span">
                {name}
              </Typography>
            </Box>
          }
          secondary={
            <Box display="flex" alignItems="center" gap={1}>
              <FaPhone />
              <Typography variant="body2" component="span">
                {number}
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="edit-dialog-title"
        aria-describedby="edit-dialog-description"
      >
        <DialogTitle id="edit-dialog-title">{"Edit Contact"}</DialogTitle>
        <DialogContent>
          <EditContactForm contact={{ id, name, number }} onClose={handleCloseEdit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}