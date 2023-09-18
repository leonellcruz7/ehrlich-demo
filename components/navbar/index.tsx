import React from "react";
import styles from "./styles.module.scss";
import Logo from "../assets/Logo";

const Navbar = () => {
  const menus = ["women", "plus", "men", "accessories"];
  return (
    <div className={styles.navbarContainer}>
      <div>
        <ul>
          {menus.map((menu, index) => {
            return <li key={index}>{menu}</li>;
          })}
        </ul>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
