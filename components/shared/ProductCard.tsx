import React, { FC } from "react";
import { ProductCardPropTypes } from "./types";
import Image from "next/image";
import classNames from "classnames";

const ProductCard: FC<ProductCardPropTypes> = ({ item }) => {
  const { image, description, price, old_price } = item;
  return (
    <div className="p-5 w-[265px] min-h-[415px] flex flex-col justify-between">
      <div className="w-[225px] h-[300px] bg-lightGrey">
        <Image width={225} height={300} alt="" src={image} />
      </div>

      <div className="flex items-center">
        <p className="text-sm capitaize my-2 leading-[110%]">{description}</p>
      </div>

      <div className="flex gap-4">
        <p
          className={classNames(
            "text-sm font-semibold",
            old_price && "text-red"
          )}
        >
          ${price}
        </p>
        {old_price && <p className="text-sm font-semibold">${old_price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
