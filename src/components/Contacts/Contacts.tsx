import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.container}>
      <a
        href="https://www.instagram.com/dr_iryna_holovko?igsh=MXBpbzJtN3A3Z2VrNg=="
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        <FaInstagram className={css.icon} />
      </a>
      <a
        href="https://t.me/+oKBOKPanjRM0YTJi"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        <LiaTelegram className={css.icon} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC7AHTcnBk-MZ5B7tTq81KpQ"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        <FiYoutube className={css.icon} />
      </a>
      <a
        href="https://www.facebook.com/IrynaIvanivnaHolovko"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        <FaFacebookSquare className={css.icon} />
      </a>
    </div>
  );
};

export default Contacts;
