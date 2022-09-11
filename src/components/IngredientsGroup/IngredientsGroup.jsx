import React from "react";
import {
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCart from "../IngredientCart/IngredientCart";
import styles from "./IngredientsGroup.module.css";
import PropTypes from "prop-types";
import types from "../../utils/types";

function IngredientsGroup({ title, data, getCurrentIngredient }) {
  return (
    <div className="pt-10">
      <h1 className="text text_type_main-medium">{title}</h1>
      <div className={styles["ingredients-group"]}>
        {data.map((item) => (
          <IngredientCart
            ingredientData={item}
            key={item._id}
            getCurrentIngredient={getCurrentIngredient}
          />
        ))}
      </div>
    </div>
  );
}

IngredientsGroup.propTypes = {
  ...types,
  title: PropTypes.string,
  getCurrentIngredient: PropTypes.func,
};

export default IngredientsGroup;
