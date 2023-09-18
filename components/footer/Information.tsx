import React from "react";
import { footerList } from "./data";
import Link from "next/link";

const Information = () => {
  return (
    <div>
      <div className="flex">
        {footerList.map((category, index) => {
          const { title, list } = category;
          return (
            <div className="pr-5">
              <div className="p-[10px]">
                <p className="uppercase text-xs font-semibold">{title}</p>
              </div>
              <ul>
                {list.map((item, index) => {
                  const { title, link } = item;
                  return (
                    <Link key={index} href={link}>
                      <li className="p-[10px]">
                        <p className="text-xs capitalize">{title}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
