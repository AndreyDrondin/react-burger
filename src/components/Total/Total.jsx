import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import TotalPrice from "../TotalPrice/TotalPrice";
import OrderButton from "../OrderButton/OrderButton";
import styles from "./Total.module.css";

function Total() {
  return (
    <div className={styles.total}>
      <TotalPrice />
      <OrderButton />
    </div>
  );
}

export default Total;
