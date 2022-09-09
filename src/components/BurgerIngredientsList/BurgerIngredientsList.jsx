import React from "react";
import IngredientsGroup from "../IngredientsGroup/IngredientsGroup";
import styles from "./BurgerIngredientsList.module.css";
import PropTypes from "prop-types";
import types from "../../utils/types";

function BurgerIngredientsList({ data, getCurrentIngredient }) {
  let dataBun = data.filter((e) => e.type === "bun");
  let dataMain = data.filter((e) => e.type === "main");
  let dataSauce = data.filter((e) => e.type === "sauce");

  return (
    <div className={styles["burger-ingredients-list"]}>
      <IngredientsGroup
        title="Булки"
        data={dataBun}
        getCurrentIngredient={getCurrentIngredient}
      />
      <IngredientsGroup
        title="Соусы"
        data={dataSauce}
        getCurrentIngredient={getCurrentIngredient}
      />
      <IngredientsGroup
        title="Начинки"
        data={dataMain}
        getCurrentIngredient={getCurrentIngredient}
      />
    </div>
  );
}

BurgerIngredientsList.propTypes = types;

export default BurgerIngredientsList;
