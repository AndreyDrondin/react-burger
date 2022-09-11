import React from "react";
import {
  CurrencyIcon,
  Counter,
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientCart.module.css";
import PropTypes from "prop-types";
import types from "../../utils/types";

function IngredientCart({ ingredientData, getCurrentIngredient }) {
  return (
    <div
      className={styles["ingredient-cart"]}
      onClick={() => getCurrentIngredient(ingredientData)}
    >
      <Counter count={1} size="default" />
      <img src={ingredientData.image} alt="" />
      <div className={styles.price}>
        <p className="text text_type_digits-default pr-2">
          {ingredientData.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{ingredientData.name}</p>
    </div>
  );
}

IngredientCart.propTypes = { ...types, getCurrentIngredient: PropTypes.func };

export default IngredientCart;
