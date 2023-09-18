import React from "react";
import { socialMediaList } from "./data";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div>
      <div className="p-[10px]">
        <p className="uppercase text-xs font-semibold">follow us</p>
      </div>
      <div className="flex gap-[10px] p-[5px]">
        {socialMediaList.map((item, index) => {
          const { icon, link } = item;
          return (
            <Link key={index} className="w-5 h-5" href={link}>
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
