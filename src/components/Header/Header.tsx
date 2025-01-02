import { useEffect, useState } from "react";
import logo from "../../img/logo.png";

import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import css from "./Header.module.css";
import Icon from "../../shared/Icon/Icon";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isScroll, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${css.header} ${isScroll && css.whenScroll}`}>
      <div className={css.logoWrap}>
        <img className={css.logo} src={logo} alt="логотип" width={50} />
        <p className={css.logoText}>WM</p>
      </div>

      {isMobile ? (
        <>
          <button
            aria-label="Меню"
            className={css.menuButton}
            onClick={handleOpen}
          >
            <Icon id="icon-burger" fill="#E5E5E5" />
          </button>
          <Modal isOpen={open} onClose={handleClose}>
            <Navigation onLinkClick={handleClose} />
          </Modal>
        </>
      ) : (
        <Navigation />
      )}
    </header>
  );
};

export default Header;
