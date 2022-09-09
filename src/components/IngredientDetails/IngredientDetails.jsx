import React from "react";
import styles from "./IngredientDetails.module.css";
import {
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import types from "../../utils/types";

function IngredientDetails({ currentIngredient }) {
  return (
    currentIngredient && (
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <img className="mt-15" src={currentIngredient.image_large} alt="Done" />
        <p className="text text_type_main-medium mt-4">
          {currentIngredient.name}
        </p>
        <div className="mt-8">
          <div>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал <br /> {currentIngredient.calories}
            </p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г <br /> {currentIngredient.proteins}
            </p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г <br /> {currentIngredient.fat}
            </p>
          </div>
          <div>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г <br /> {currentIngredient.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    )
  );
}

IngredientDetails.propTypes = types;

export default IngredientDetails;
