interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation = ({ onLinkClick }: NavigationProps) => {
  return (
    <nav aria-label="Основне меню">
      <ul className="md:flex md:gap-[24px] md:items-center md:justify-center">
        <li className="text-center text-[#ededed] text-[24px] hover:text-white  mb-[24px] md:mb-0">
          <a href="#serv" onClick={onLinkClick}>
            Послуги
          </a>
        </li>
        <li className="text-center text-[#ededed] text-[24px] hover:text-white">
          <a href="#links" onClick={onLinkClick}>
            Посилання
          </a>
        </li>
        {/* <li className={css.link}>
          <a href="#" onClick={onLinkClick} aria-label="Підтримати проєкт">
            Підтримати проект
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
