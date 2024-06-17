import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts, selectLoading, selectError } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Searchbox from '../../components/Searchbox/Searchbox';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center">Contacts</Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <ContactForm />
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Searchbox />
      </Box>
      {isLoading && <Box display="flex" justifyContent="center" mt={2}><CircularProgress /></Box>}
      {error && <Box display="flex" justifyContent="center" mt={2}><Alert severity="error">{error}</Alert></Box>}
      <Box mt={2}>
        <ContactList contacts={contacts} />
      </Box>
    </Box>
  );
};

export default ContactsPage;