import React from "react";
import styles from "./styles.module.scss";

import Main from "./Main";
import Secondary from "./Secondary";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Main />
      <Secondary />
    </div>
  );
};

export default Navbar;
