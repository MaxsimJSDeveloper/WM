import ContactsList from "../ContactsList/ContactsList";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <ContactsList />
    </footer>
  );
};

export default Footer;
