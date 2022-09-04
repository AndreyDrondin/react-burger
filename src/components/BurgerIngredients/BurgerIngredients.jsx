import React from "react";
import styles from "./BurgerIngredients.module.css";
import { box } from "@ya.praktikum/react-developer-burger-ui-components";
import TabMain from "../Tab/Tab";
import BurgerIngredientsList from "../BurgerIngredientsList/BurgerIngredientsList";
import PropTypes from "prop-types";

function BurgerIngredients({ data }) {
  return (
    <section className={styles["burger-ingredients"]}>
      <TabMain />
      <BurgerIngredientsList data={data} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ),
};

export default BurgerIngredients;
