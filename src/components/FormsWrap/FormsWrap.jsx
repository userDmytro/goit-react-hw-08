import ContactForm from "../ContactForm/ContactForm";
import EditContactForm from "../EditContactForm/EditContactForm";
import style from "./FormsWrap.module.css";

const FormsWrap = () => {
  return (
    <div className={style.wrap}>
      <ContactForm />
      <EditContactForm />
    </div>
  );
};

export default FormsWrap;
