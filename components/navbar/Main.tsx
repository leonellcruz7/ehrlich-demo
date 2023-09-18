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
    <div className="bg-white">
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
            <div className="relative">
              <i className="ri-shopping-bag-line"></i>
              <div className="absolute right-0 shadow-button mt-3">
                <CartOverview />
              </div>
            </div>
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

const CartOverview = () => {
  return (
    <div className="w-[500px] h-[800px] bg-white border-[1px] border-[#f2f2f2] p-4">
      <CartItem />
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="w-full pb-4 border-b-[1px] border-lightGrey flex gap-4">
      <div className="min-w-[80px] h-[120px] bg-grey"></div>
      <div>
        <p className="text-sm leading-[110%] text-grey">
          Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit
        </p>
        <div className="flex gap-4">
          <p>$20.00</p>
          <p>$20.00</p>
        </div>
      </div>
    </div>
  );
};
