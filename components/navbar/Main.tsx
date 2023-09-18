import React from "react";
import styles from "./styles.module.scss";
import Logo from "../assets/Logo";
import CurrencySelector from "./CurrencySelector";

const Main = () => {
  const menus = ["women", "plus", "men", "accessories"];

  return (
    <div className={styles.main}>
      <ul className={styles.menuList}>
        {menus.map((menu, index) => {
          return (
            <li className={styles.menu} key={index}>
              <p>{menu}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <Logo />
      </div>
      <div>
        <div className={styles.navbarFeatures}>
          <i className="ri-user-line"></i>
          <i className="ri-shopping-bag-line"></i>
          <i className="ri-heart-line"></i>
          <i className="ri-customer-service-fill"></i>
          <i className="ri-search-line"></i>
          <CurrencySelector />
        </div>
      </div>
    </div>
  );
};

export default Main;
