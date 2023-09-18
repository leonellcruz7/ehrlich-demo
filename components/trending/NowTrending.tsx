import React, { FC } from "react";
import styles from "./styles.module.scss";
import { TrendItemPropTypes } from "./types";
import Image from "next/image";
import HashTag from "../shared/HashTag";
import { hashtags, trends } from "./data";

const NowTrending = () => {
  return (
    <div className={styles.trendingContainer}>
      <div className="title-container mx-auto">
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

      <div className="flex gap-[25px] justify-center">
        {hashtags.map((tag, index) => {
          return <HashTag key={index}>{tag}</HashTag>;
        })}
      </div>
    </div>
  );
};

export default NowTrending;

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
