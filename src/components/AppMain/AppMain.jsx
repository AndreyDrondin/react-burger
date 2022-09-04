import React from "react";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import styles from "./AppMain.module.css";

function AppMain({ data }) {
  return (
    <div className={styles.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={styles["main-container"]}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default AppMain;
