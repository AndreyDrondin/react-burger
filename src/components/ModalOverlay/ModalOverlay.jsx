import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ close }) {
  return <div className={styles["modal__overlay"]} onClick={close} />;
}

ModalOverlay.propTypes = {
  close: PropTypes.func,
};

export default ModalOverlay;
