import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "../ModalContent/ModalContent";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const modalsElement = document.getElementById("react-modals");

function Modal({ close, children, isOpen }) {
  function pressEsc(e) {
    if (e.key === "Escape") {
      close();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", pressEsc);

    return () => {
      document.removeEventListener("keydown", pressEsc);
    };
  }, []);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className={styles["modal__root"]}>
        <ModalOverlay close={close} />
        <ModalContent close={close}>{children}</ModalContent>
      </div>,
      modalsElement
    )
  );
}

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default Modal;
