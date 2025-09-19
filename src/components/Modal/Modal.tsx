import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import Icon from "../../shared/Icon/Icon";

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
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[1000]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="max-w-[290px] p-[20px] pt-[40px] rounded-[5px] relative z-[1001] bg-accent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-[10px] right-[10px] bg-none border-none text-[24px]"
          onClick={onClose}
          aria-label="Закрити модальне вікно"
        >
          <Icon id="icon-close" fill="#fafafa" width="20" height="20" />
        </button>
        <h2 className="sr-only">Заголовок модального окна</h2>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
