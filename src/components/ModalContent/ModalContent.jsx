import React from "react";
import styles from "./ModalContent.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function ModalContent({ close, children }) {
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={close}>
        <CloseIcon type="primary" />
      </button>
      {children}
    </div>
  );
}

ModalContent.propTypes = {
  close: PropTypes.func,
  children: PropTypes.element,
};

export default ModalContent;
