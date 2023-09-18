import React from "react";
import styles from "./styles.module.scss";
import USFlag from "../assets/USFlag";

const CurrencySelector = () => {
  return (
    <div className={styles.currencySelector}>
      <div className="flex items-center gap-[3px]">
        <USFlag />
        <p className="text-[14px]">USD$</p>
      </div>
      <i className="ri-arrow-down-s-line"></i>
    </div>
  );
};

export default CurrencySelector;
