import React, { FC } from "react";
import BlackFriday from "./BlackFriday";
import styles from "./styles.module.scss";
import { TrendItemPropTypes } from "./types";
import Image from "next/image";

const Trending = () => {
  const trends = [
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025350/ehrlich/Rectangle_8_cyd7ry.png",
      title: "winter fashion",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025353/ehrlich/Rectangle_8_1_lma46l.png",
      title: "boots",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025349/ehrlich/Rectangle_8_2_xlygaz.png",
      title: "night out",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025354/ehrlich/Rectangle_8_3_f3ovyu.png",
      title: "holidays",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025350/ehrlich/Rectangle_8_4_qepv3h.png",
      title: "outerwear",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025350/ehrlich/Rectangle_8_5_cvjael.png",
      title: "white dresses",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025349/ehrlich/Rectangle_8_6_ymery9.png",
      title: "sweaters",
    },
    {
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1695025353/ehrlich/Rectangle_8_7_n1gu2x.png",
      title: "party",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <BlackFriday />
      <div className={styles.trendingContainer}>
        <div className="px-5 pb-5 pt-[10px]">
          <p className="text-xxl font-extrabold">Now Trending</p>
        </div>
        <div className="px-5 pb-5 pt-[10px]">
          <p className="text-sm">See what everyone’s wearing right now </p>
        </div>

        <div className="flex flex-wrap">
          {trends.map((trend, index) => {
            return <TrendItem key={index} trend={trend} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;

const TrendItem: FC<TrendItemPropTypes> = ({ trend }) => {
  const { image, title } = trend;
  return (
    <div className={styles.trendItemContainer}>
      <div className="w-[225px] h-[300px] bg-grey">
        <Image width={225} height={300} alt="" src={image} />
      </div>
      <div className="h-[50px] justify-center flex items-center">
        <p className="text-lg font-semibold uppercase">{title}</p>
      </div>
    </div>
  );
};
