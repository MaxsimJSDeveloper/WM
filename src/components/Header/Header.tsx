import { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";

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
    <header
      className={`z-50 bg-accent flex items-center justify-between py-3 px-6 mb-6 transition-all duration-300 ease-in-out ${
        isScroll ? "fixed top-0 w-full shadow-md transform" : ""
      }`}
    >
      <div className="flex items-center group">
        <a
          href=""
          className="font-secondFamily font-normal text-[32px] text-content transition-transform duration-300 transform group-hover:scale-110 group-hover:text-white"
        >
          WM
        </a>
      </div>

      {isMobile ? (
        <>
          <button aria-label="Меню" onClick={handleOpen}>
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
