import React from "react";
import BurgerConstructorList from "../BurgerConstructorList/BurgerConstructorList";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import Total from "../Total/Total";
import PropTypes from "prop-types";

function BurgerConstructor({ data }) {
  return (
    <section className="ml-10">
      <BurgerConstructorList props={data} />
      <Total />
    </section>
  );
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
