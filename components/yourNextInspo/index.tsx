import React from "react";
import { inspoList } from "./datas";
import Image from "next/image";

const YourNextInspo = () => {
  return (
    <div className="h-[550px] bg-lightGrey">
      <div className="main-container flex flex-col items-center py-10 px-[60px]">
        <div className="title-container">
          <p>Your Next Inspo</p>
        </div>
        <div className="pt-[10px] pb-5 px-5">
          <p className="text-sm">
            Checkout who’s wearing what by using #THREADEDInspo on Instagram
          </p>
        </div>

        <div className="flex justify-between w-full">
          {inspoList.map((item, index) => {
            return (
              <div className="w-[225px] h-[225px] bg-grey">
                <Image width={225} height={225} alt="" src={item} />
              </div>
            );
          })}
        </div>
        <button className="button black small mt-[31px]">view all posts</button>
      </div>
    </div>
  );
};

export default YourNextInspo;
