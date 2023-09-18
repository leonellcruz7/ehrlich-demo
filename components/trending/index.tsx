import React from "react";
import BlackFriday from "./BlackFriday";
import styles from "./styles.module.scss";

import NowTrending from "./NowTrending";

const Trending = () => {
  return (
    <div className={styles.mainContainer}>
      <BlackFriday />
      <NowTrending />
    </div>
  );
};

export default Trending;
