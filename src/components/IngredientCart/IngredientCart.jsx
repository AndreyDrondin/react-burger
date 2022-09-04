import React from "react";
import {
  CurrencyIcon,
  Counter,
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientCart.module.css";

function IngredientCart({ props }) {
  return (
    <div className={styles["ingredient-cart"]}>
      <Counter count={1} size="default" />
      <img src={props.image} alt="" />
      <div className={styles.price}>
        <p className="text text_type_digits-default pr-2">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{props.name}</p>
    </div>
  );
}

export default IngredientCart;
