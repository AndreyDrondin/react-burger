import React from "react";
import styles from "./MenuItem.module.css";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

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

export default MenuItem;
