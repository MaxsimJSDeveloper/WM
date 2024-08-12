import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.container}>
      <FaInstagram className={css.icon} />
      <LiaTelegram className={css.icon} />
      <FiYoutube className={css.icon} />
      <FaFacebookSquare className={css.icon} />
    </div>
  );
};

export default Contacts;
