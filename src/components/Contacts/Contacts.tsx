import css from "./Contacts.module.css";
import Icon from "../../shared/Icon/Icon";
import IconsLink from "../../shared/IconsLink/IconsLink";

const Contacts = () => {
  return (
    <div className={css.container} aria-label="Контакти">
      <h2 className="visuallyHidden">Зв'язатися зі мною</h2>
      <div className={css.links}>
        <IconsLink link="https://www.instagram.com" alt="Instagram">
          <Icon id="icon-instagram" fill="#E5E5E5" />
        </IconsLink>

        <IconsLink link="https://t.me/+oKBOKPanjRM0YTJi" alt="Telegram">
          <Icon id="icon-telegram" fill="#E5E5E5" />
        </IconsLink>

        <IconsLink
          link="https://www.youtube.com/channel/UC7AHTcnBk-MZ5B7tTq81KpQ"
          alt="YouTube"
        >
          <Icon id="icon-youtube" fill="#E5E5E5" />
        </IconsLink>

        <IconsLink
          link="https://www.facebook.com/IrynaIvanivnaHolovko"
          alt="Facebook"
        >
          <Icon id="icon-facebook" fill="#E5E5E5" />
        </IconsLink>

        <IconsLink
          link="https://www.linkedin.com/in/iryna-holovko-b5434b32a"
          alt="linkedin"
        >
          <Icon id="icon-linkedin" fill="#E5E5E5" />
        </IconsLink>

        <IconsLink
          link="https://radiologycenter.eu/doctors/golovkoirinaivanivna"
          alt="мого сайту"
        >
          <Icon id="icon-website" fill="#E5E5E5" />
        </IconsLink>
      </div>
    </div>
  );
};

export default Contacts;
