import React from "react";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructorList.module.css";

function BurgerConstructorList({ props }) {
  return (
    <div className={styles["burger-constructor-list"]}>
      <div className={styles["first-item"]}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={props[0].name}
          price={props[0].price}
          thumbnail={props[0]["image_large"]}
          key={props[0]._id}
        />
      </div>
      <div className={styles["main-items"]}>
        {props.map((item, index) => (
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
          text={props[props.length - 1].name}
          price={props[props.length - 1].price}
          thumbnail={props[props.length - 1]["image_large"]}
          key={props[props.length - 1]._id}
        />
      </div>
    </div>
  );
}

export default BurgerConstructorList;
