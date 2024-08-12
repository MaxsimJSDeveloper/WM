import css from "./Navigation.module.css";

interface NavigationProps {
  onLinkClick: () => void;
}

const Navigation = ({ onLinkClick }: NavigationProps) => {
  return (
    <div>
      <ul>
        <li className={css.link}>
          <a href="#serv" onClick={onLinkClick}>
            Послуги
          </a>
        </li>
        <li className={css.link}>
          <a href="#" onClick={onLinkClick}>
            Посилання
          </a>
        </li>
        <li className={css.link}>
          <a href="#" onClick={onLinkClick}>
            Підтримати проект
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
