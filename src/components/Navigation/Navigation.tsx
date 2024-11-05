import css from "./Navigation.module.css";

interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation = ({ onLinkClick }: NavigationProps) => {
  return (
    <nav aria-label="Основне меню">
      <ul className={css.navList}>
        <li className={css.link}>
          <a href="#serv" onClick={onLinkClick}>
            Послуги
          </a>
        </li>
        <li className={css.link}>
          <a href="#links" onClick={onLinkClick}>
            Посилання
          </a>
        </li>
        <li className={css.link}>
          <a href="#" onClick={onLinkClick} aria-label="Підтримати проєкт">
            Підтримати проект
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
