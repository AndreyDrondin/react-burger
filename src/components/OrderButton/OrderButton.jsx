import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function OrderButton({ setOrder }) {
  return (
    <Button type="primary" size="large" onClick={() => setOrder()}>
      Оформить заказ
    </Button>
  );
}

OrderButton.propTypes = {
  setOrder: PropTypes.func,
};

export default OrderButton;
