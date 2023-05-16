import React from "react";
import styles from "./Menu.module.css";
import defaults from "../../../common/Styles/Defaults.module.css";

const Menu = () => {
  return (
    <section className={defaults.container}>
      <div className={styles.menu}>
        <h1>منوی رستوران</h1>
      </div>
    </section>
  );
};

export default Menu;
