import React from "react";
import styles from "./HeroSection.module.css";
import background from "./img/Slider.png";

const HeroSection = () => {
  return (
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
    // <div className={styles.HeroSection}>
    //   <div>
    //     <img src={require("./img/Slider.png")} alt="logo" />
    //   </div>
    // </div>
  );
};

export default HeroSection;
