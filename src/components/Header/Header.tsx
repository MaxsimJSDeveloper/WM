import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../img/logo.png";

import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import css from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className={`${!isMobile && css.header}`}>
      {!isMobile && (
        <img className={css.logo} src={logo} alt="логотип" width={50} />
      )}
      {isMobile ? (
        <>
          <button
            aria-label="Меню"
            className={css.menuButton}
            onClick={handleOpen}
          >
            <RxHamburgerMenu
              style={{
                width: 42,
                height: 42,
                color: "#fff",
                backgroundColor: "#91bf65",
                padding: 6,
                borderRadius: 6,
                position: "fixed",
              }}
            />
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
