import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../assets/Logo";
import CurrencySelector from "./CurrencySelector";
import classNames from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CartRootState } from "@/redux/cart";

import CartOverview from "./CartOverview";

const Main = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);
  const menus = [
    { title: "women", link: "#" },
    { title: "plus", link: "#" },
    { title: "men", link: "#" },
    { title: "accessories", link: "#" },
  ];

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    });
  }, []);

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
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <div className={styles.navbarFeatures}>
            <i className="ri-user-line"></i>
            <div ref={cartRef} className="relative">
              {cart.length !== 0 && (
                <div className="absolute -right-2 -top-1 w-5 h-5 rounded-[50%] bg-[#af3333] flex items-center justify-center">
                  <p className="text-xs font-semibold text-white text-center">
                    {cart.length}
                  </p>
                </div>
              )}
              <i
                onClick={() => setShowCart((prev) => !prev)}
                className="ri-shopping-bag-line"
              ></i>
              {showCart && (
                <div className="absolute right-0 shadow-button mt-3">
                  <CartOverview />
                </div>
              )}
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
