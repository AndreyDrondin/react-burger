import React from "react";
import styles from "./OrderDetails.module.css";
import {
  Box,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import done from "../../images/done.png";

function OrderDetails() {
  return (
    <div className={styles.content}>
      <h1 className="text text_type_digits-large">034536</h1>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15" src={done} alt="Done" />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
