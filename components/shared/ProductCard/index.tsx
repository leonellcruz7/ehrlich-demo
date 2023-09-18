import React, { FC, useEffect } from "react";
import { ProductCardPropTypes } from "./types";
import Image from "next/image";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { CartRootState, addToCart } from "@/redux/cart";

const ProductCard: FC<ProductCardPropTypes> = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const { image, description, price, old_price } = item;
  const handleAddtoCart = () => {
    dispatch(addToCart([...cart, item]));
  };
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
      <button onClick={handleAddtoCart} className="button black smaller mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
