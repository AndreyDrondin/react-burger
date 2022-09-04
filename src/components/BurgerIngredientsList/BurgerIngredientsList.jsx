import React from "react";
import IngredientsGroup from "../IngredientsGroup/IngredientsGroup";
import styles from "./BurgerIngredientsList.module.css";

function BurgerIngredientsList({ data }) {
  let dataBun = data.filter((e) => e.type === "bun");
  let dataMain = data.filter((e) => e.type === "main");
  let dataSauce = data.filter((e) => e.type === "sauce");

  return (
    <div className={styles["burger-ingredients-list"]}>
      <IngredientsGroup title="Булки" data={dataBun} />
      <IngredientsGroup title="Соусы" data={dataSauce} />
      <IngredientsGroup title="Начинки" data={dataMain} />
    </div>
  );
}

export default BurgerIngredientsList;
