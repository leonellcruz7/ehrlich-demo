import { ProductCardPropTypes } from "@/components/shared/ProductCard/types";
import Image from "next/image";
import React, { FC } from "react";

const ProductItem: FC<ProductCardPropTypes> = ({ item }) => {
  const { image, description, price, old_price } = item;
  return (
    <div className="w-full flex justify-between border-t-[1px] border-lightGrey py-4">
      <div className="flex gap-4">
        <div className="w-[80px] h-[120px] bg-grey">
          <Image width={80} height={120} alt="" src={image} />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <p className="font-semibold">${price}</p>
    </div>
  );
};

export default ProductItem;
