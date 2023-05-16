import React from "react";
import defaults from "../../common/Styles/Defaults.module.css";
import appcss from "../../App.css";
import FlexNav from "./NavBar.module.css";

const NavBar = () => {
  return (
    <section className={defaults.container}>
      <div className={appcss.Estedad}>
        <div className={FlexNav.FlexNav}>
          <div className={FlexNav.LeftIcons}>
            <img src={require("./Left-Items/User.png")} alt="logo" />
            <img src={require("./Left-Items/Shop.png")} alt="logo" />
            <img src={require("./Left-Items/Search.png")} alt="logo" />
          </div>
          <div>تماس با ما</div>
          <div className={FlexNav.Categories}></div>
          <div>درباره ما</div>
          <div>اعطای نمایندگی</div>
          <div className={FlexNav.Items}>
            <img src={require("./arrows/arrow-down.png")} alt="logo" />
            <div>منو</div>
          </div>
          <div className={FlexNav.Items}>
            <img src={require("./arrows/arrow-down.png")} alt="logo" />
            <div>شعبه</div>
          </div>
          <div>صفحه اصلی</div>
          <img src={require("./img/Logo.png")} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
