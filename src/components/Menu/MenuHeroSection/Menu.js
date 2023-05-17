import React from "react";
import styles from "./Menu.module.css";
import defaults from "../../../common/Styles/Defaults.module.css";

const Menu = () => {
  return (
    <section className={defaults.container}>
      <div className={styles.menu}>
        <h1>منوی رستوران</h1>
        <div className={styles.menuFlex}>
          <div className={styles.menuBoxes}>
            <img src={require("./img/image-1.png")} alt="logo" />
            <div className={styles.foodTitle}>دسر</div>
          </div>
          <div className={styles.menuBoxes}>
            <img src={require("./img/image-2.png")} alt="logo" />
            <div className={styles.foodTitle}>پیش غذا</div>
          </div>
          <div className={styles.menuBoxes}>
            <img src={require("./img/image-3.png")} alt="logo" />
            <div className={styles.foodTitle}>غذای اصلی</div>
          </div>
          <div className={styles.menuBoxes}>
            <img src={require("./img/image.png")} alt="logo" />
            <div className={styles.foodTitle}>نوشیدنی</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
