import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.contactList}>
      
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={style.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
