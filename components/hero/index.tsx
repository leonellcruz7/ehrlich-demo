import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import hero from "@/public/hero.png";
import promo from "@/public/hero 1.png";
import background from "@/public/Rectangle.png";
import Deals from "./Deals";

const Hero = () => {
  return (
    <div className="main-container">
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image alt="" width={850} height={650} src={hero} />
        </div>
        <div className={styles.backgroundImage}>
          <Image alt="" width={1000} height={1000} src={background} />
        </div>
        <div className="z-50 flex flex-col items-center">
          <div className={styles.promo}>
            <Image
              alt=""
              width={644}
              height={446}
              src={promo}
              className="w-full"
            />
          </div>
          <button className="button white large mx-auto">shop now</button>
        </div>
      </div>
      <Deals />
    </div>
  );
};

export default Hero;
