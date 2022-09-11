import React from "react";
import styles from "./TotalPrice.module.css";
import {
  Box,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function TotalPrice() {
  return (
    <div className={styles["total-price"]}>
      <p className="text text_type_digits-medium pr-2">610</p>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default TotalPrice;
