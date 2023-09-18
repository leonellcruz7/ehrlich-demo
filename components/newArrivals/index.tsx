import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import girl1 from "@/public/girl1.png";
import girl2 from "@/public/girl2.png";

const NewArrivals = () => {
  return (
    <div className="main-container">
      <div className={styles.newArrivalsContainer}>
        <div className="relative w-full h-full flex">
          <Image
            className={styles.girl1}
            width={449}
            height={674}
            alt=""
            src={girl1}
          />
          <Image
            className={styles.girl2}
            width={387}
            height={670}
            alt=""
            src={girl2}
          />
        </div>
        <div>
          <p className="text-[86px] font-extrabold uppercase text-white leading-[86px] w-[462px]">
            new arrivals
          </p>
          <p className="text-[28px] text-white mt-[21px] mb-[43px]">
            Get ready for the holidays with us!
          </p>
          <button className="button white small">shop now</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
