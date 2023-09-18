import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import bg from "@/public/blackfriday.png";

const BlackFriday = () => {
  return (
    <div className={styles.blackFridayContainer}>
      <div className="flex gap-6 items-center z-10">
        <p className="text-white text-xl uppercase font-extrabold">
          black friday exclusive
        </p>
        <p className="text-white uppercase font-semibold text-md max-w-[354px]">
          free shipping on all orders for VIP 2 and up!
        </p>
      </div>
      <button className="button small white">shop now</button>
      <div className={styles.blackFridayBackground}>
        <Image width={834} height={75} alt="" src={bg} />
      </div>
    </div>
  );
};

export default BlackFriday;
