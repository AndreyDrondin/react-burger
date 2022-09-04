import React from "react";
import {
  box,
  ProfileIcon,
  Logo,
  BurgerIcon,
  ListIcon,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MenuItem img={<BurgerIcon type="primary" />} text="Конструктор" />
        <MenuItem img={<ListIcon type="secondary" />} text="Лента заказов" />
        <div>
          <Logo />
        </div>
        <MenuItem
          img={<ProfileIcon type="secondary" />}
          text="Личный кабинет"
        />
      </div>
    </header>
  );
}

export default AppHeader;
