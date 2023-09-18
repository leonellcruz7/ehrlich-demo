import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { CartRootState } from "@/redux/cart";

const ShoppingBag = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);

  return (
    <div className="w-full min-h-[500px]">
      <div className="flex justify-between">
        <p className="uppercase font-semibold">item</p>
        <p className="uppercase font-semibold">price</p>
      </div>

      <div>
        {cart.map((item, index) => {
          return <ProductItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingBag;
