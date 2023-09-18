import React from "react";
import ProductCard from "../shared/ProductCard";
import { items } from "./data";

const RecentlyBought = () => {
  return (
    <div className="p-10 main-container">
      <div className="title-container mx-auto">
        <p>recently bought</p>
      </div>
      <div className="flex flex-wrap justify-between">
        {items.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RecentlyBought;
