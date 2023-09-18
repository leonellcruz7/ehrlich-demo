import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { CartRootState } from "@/redux/cart";

const ShoppingBag = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const filteredCart = cart.filter(
    (item, index) => cart.indexOf(item) === index
  );
  const isEmpty = cart.length === 0;
  return (
    <div className="w-full min-h-[500px]">
      <div className="flex justify-between">
        <p className="uppercase font-semibold">item</p>
        <p className="uppercase font-semibold">price x qty</p>
      </div>

      <div>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          filteredCart.map((item, index) => {
            return <ProductItem item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default ShoppingBag;

const EmptyCart = () => {
  return (
    <div className="w-full h-[200px] flex justify-center items-center text-grey">
      Your Cart is Empty
    </div>
  );
};
