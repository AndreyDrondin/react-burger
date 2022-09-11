import React from "react";
import styles from "./MenuItem.module.css";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import types from "../../utils/types";

function MenuItem({ img, text }) {
  return (
    <div className={styles.menuLink}>
      <a className="text text_type_main-default" href="">
        {img}
        <p className={styles.textLink}>{text}</p>
      </a>
    </div>
  );
}

MenuItem.propTypes = { img: PropTypes.element, text: PropTypes.string };

export default MenuItem;
