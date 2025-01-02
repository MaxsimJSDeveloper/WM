import css from "./Contacts.module.css";

import ContactsList from "../ContactsList/ContactsList";

const Contacts = () => {
  return (
    <div className={css.container} aria-label="Контакти">
      <h2 className="visuallyHidden">Зв'язатися зі мною</h2>
      <ContactsList />
    </div>
  );
};

export default Contacts;
