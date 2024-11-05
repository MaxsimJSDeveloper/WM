import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import css from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={css.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.modalClose}
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          <IoMdClose className={css.icon} />
        </button>
        <h2 className="visuallyHidden">Заголовок модального окна</h2>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
