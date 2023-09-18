import React from "react";
import BlackFriday from "./BlackFriday";
import styles from "./styles.module.scss";

import NowTrending from "./NowTrending";

const Trending = () => {
  return (
    <div className="main-container">
      <div className={styles.mainContainer}>
        <BlackFriday />
        <NowTrending />
      </div>
    </div>
  );
};

export default Trending;
