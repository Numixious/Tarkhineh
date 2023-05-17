import React from "react";
import styles from "./BranchesInfo.module.css";
import defaults from "../../common/Styles/Defaults.module.css";

const BranchesInfo = () => {
  return (
    <section className={defaults.container}>
      <div className={styles.BranchesInfoFlex}>
        <div className={styles.RightFlex}>
          <h1>رستوران های زنجیره ای ترخینه</h1>
          <div>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </div>
          {/* <button type="text">اطلاعات بیشتر</button> */}
          <div className={styles.BtnMoreInfo}>اطلاعات بیشتر</div>
        </div>
        <div className={styles.LeftFlex}>
          <img src={require("./img/1-2.png")} alt="logo" />
          <img src={require("./img/3-4.png")} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default BranchesInfo;
