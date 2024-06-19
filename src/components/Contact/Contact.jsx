// src/components/Contact/Contact.jsx
import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { setActiveContactId, toggleModal } from "../../redux/contacts/slice";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    dispatch(setActiveContactId(id));
    dispatch(toggleModal());
  };

  return (
    <div className={style.contact}>
      <div className={style.data}>
        <p className={style.info}>
          <FaUser className={style.infoIcon} /> {name}
        </p>
        <p className={style.info}>
          <FaPhoneAlt className={style.infoIcon} /> {number}
        </p>
      </div>
      <button className={style.button} type="button" onClick={handleEdit}>
        <MdModeEdit className={style.pencil} />
      </button>
      <button className={style.button} type="button" onClick={handleDelete}>
        <MdDeleteForever className={style.bin} />
      </button>
    </div>
  );
};

export default Contact;
