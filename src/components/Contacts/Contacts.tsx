import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.container} aria-label="Контакти">
      <h2 className="visuallyHidden">Зв'язатися з нами</h2>
      <div className={css.links}>
        <a
          href="https://www.instagram.com/dr_iryna_holovko?igsh=MXBpbzJtN3A3Z2VrNg=="
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
          aria-label="Перейти до Instagram"
        >
          <FaInstagram className={css.icon} />
        </a>
        <a
          href="https://t.me/+oKBOKPanjRM0YTJi"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
          aria-label="Перейти до Telegram"
        >
          <LiaTelegram className={css.icon} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC7AHTcnBk-MZ5B7tTq81KpQ"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
          aria-label="Перейти до YouTube"
        >
          <FiYoutube className={css.icon} />
        </a>
        <a
          href="https://www.facebook.com/IrynaIvanivnaHolovko"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
          aria-label="Перейти у Facebook"
        >
          <FaFacebookSquare className={css.icon} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
