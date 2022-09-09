import React from "react";
import styles from "./BurgerIngredients.module.css";
import { box } from "@ya.praktikum/react-developer-burger-ui-components";
import TabMain from "../Tab/Tab";
import BurgerIngredientsList from "../BurgerIngredientsList/BurgerIngredientsList";
import PropTypes from "prop-types";
import types from "../../utils/types";

function BurgerIngredients({ data, getCurrentIngredient }) {
  return (
    <section className={styles["burger-ingredients"]}>
      <TabMain />
      <BurgerIngredientsList
        data={data}
        getCurrentIngredient={getCurrentIngredient}
      />
    </section>
  );
}

BurgerIngredients.propTypes = types;

export default BurgerIngredients;
