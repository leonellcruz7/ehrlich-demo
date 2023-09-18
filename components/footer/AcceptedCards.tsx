import React from "react";
import { acceptedCards } from "./data";
import Image from "next/image";

const AcceptedCards = () => {
  return (
    <div>
      <div className="p-[10px] mt-[10px]">
        <p className="uppercase text-xs font-semibold">we accept</p>
      </div>
      <div className="flex gap-[10px] px-[10px] py-[5px]">
        {acceptedCards.map((card, index) => {
          return (
            <div key={index} className="w-[37.5px] h-[25px]">
              <Image width={300} height={300} alt="" src={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AcceptedCards;
