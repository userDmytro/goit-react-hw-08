import { useEffect } from "react";
import SearchBox from "../../components/Searchbox/Searchbox";
import FormsWrap from "../../components/FormsWrap/FormsWrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import Loader from '../../components/Loader/Loader';
import { Helmet } from "react-helmet";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <FormsWrap />
      <SearchBox />
      <div>
        {isLoading && (
          <Loader />
        )}
        {error && "Error! Try again"}
      </div>
      <ContactList contacts={contacts} />
    </>
  );
}
