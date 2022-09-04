import React from "react";
import {
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCart from "../IngredientCart/IngredientCart";
import styles from "./IngredientsGroup.module.css";

function IngredientsGroup({ title, data }) {
  return (
    <div className="pt-10">
      <h1 className="text text_type_main-medium">{title}</h1>
      <div className={styles["ingredients-group"]}>
        {data.map((item, index) => (
          <IngredientCart props={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default IngredientsGroup;
