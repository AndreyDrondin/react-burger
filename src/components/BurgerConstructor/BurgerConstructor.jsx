import React from "react";
import BurgerConstructorList from "../BurgerConstructorList/BurgerConstructorList";
import {
  Box,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import types from "../../utils/types";
import TotalPrice from "../TotalPrice/TotalPrice";
import OrderButton from "../OrderButton/OrderButton";
import styles from "./BurgerConstructor.module.css";

function BurgerConstructor({ data, setOrder }) {
  return (
    <section className="ml-10">
      <BurgerConstructorList data={data} />
      <div className={styles.total}>
        <TotalPrice />
        <OrderButton setOrder={setOrder} />
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = { ...types, setOrder: PropTypes.func };

export default BurgerConstructor;
