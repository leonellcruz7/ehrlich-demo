import React from "react";
import styles from "./styles.module.scss";
import Logo from "../assets/Logo";
import CurrencySelector from "./CurrencySelector";
import classNames from "classnames";
import Link from "next/link";

const Main = () => {
  const menus = [
    { title: "women", link: "#" },
    { title: "plus", link: "#" },
    { title: "men", link: "#" },
    { title: "accessories", link: "#" },
  ];

  return (
    <div>
      <div className={classNames("main-container", styles.main)}>
        <ul className={styles.menuList}>
          {menus.map((menu, index) => {
            const { title, link } = menu;
            return (
              <Link className={styles.menu} href={link} key={index}>
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
        <div>
          <Link href="#">
            <Logo />
          </Link>
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
    </div>
  );
};

export default Main;
