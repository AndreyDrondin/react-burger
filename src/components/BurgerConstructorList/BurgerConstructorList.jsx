import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructorList.module.css";
import PropTypes from "prop-types";
import types from "../../utils/types";

function BurgerConstructorList({ data }) {
  return (
    data.length > 0 && (
      <div className={styles["burger-constructor-list"]}>
        <div className={styles["first-item"]}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0]["image_large"]}
            key={data[0]._id}
          />
        </div>
        <div className={styles["main-items"]}>
          {data.map((item) => (
            <div className={styles["main-item"]} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item["image_large"]}
              />
            </div>
          ))}
        </div>
        <div className={styles["last-item"]}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={data[data.length - 1].name}
            price={data[data.length - 1].price}
            thumbnail={data[data.length - 1]["image_large"]}
            key={data[data.length - 1]._id}
          />
        </div>
      </div>
    )
  );
}

BurgerConstructorList.propTypes = types;

export default BurgerConstructorList;
