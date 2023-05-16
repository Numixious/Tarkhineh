import React from "react";
import styles from "./HeroSection.module.css";
import background from "./img/Slider.png";
import defaults from "../../../common/Styles/Defaults.module.css";

const HeroSection = () => {
  return (
    <section className={defaults.container}>
      <article
        className={styles.article}
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className={styles.header}>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
        <div className={styles.header}>
          <div className={styles.onlineOrder}>
            <p>سفارش آنلاین غذا</p>
          </div>
        </div>
      </article>
    </section>
    // <div className={styles.HeroSection}>
    //   <div>
    //     <img src={require("./img/Slider.png")} alt="logo" />
    //   </div>
    // </div>
  );
};

export default HeroSection;
