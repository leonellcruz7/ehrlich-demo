import { CartRootState } from "@/redux/cart";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductCardPropTypes } from "../shared/ProductCard/types";
import Link from "next/link";
import classNames from "classnames";

const CartOverview = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const filteredCart = cart.filter(
    (item, index) => cart.indexOf(item) === index
  );
  const isEmpty = cart.length === 0;
  return (
    <div className="w-[500px] h-[800px] overflow-scroll bg-white border-[1px] border-[#f2f2f2] p-4 flex flex-col gap-4">
      {isEmpty ? (
        <EmptyCart />
      ) : (
        filteredCart.map((product, index) => {
          return <CartItem key={index} item={product} />;
        })
      )}
    </div>
  );
};

export default CartOverview;

const EmptyCart = () => {
  return (
    <div className="w-full h-[80%] flex justify-center items-center text-grey">
      No items on your cart yet
    </div>
  );
};

const CartItem: FC<ProductCardPropTypes> = ({ item }) => {
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const quantity = cart.filter((product) => product.id === item.id);
  const { image, description, price, old_price, qty } = item;

  return (
    <Link href="/cart">
      <div className="w-full p-4 border-b-[1px] border-lightGrey flex gap-4 hover:bg-lightGrey cursor-pointer transition-all">
        <div className="min-w-[80px] h-[100px] bg-grey">
          <Image width={80} height={120} alt="" src={image} />
        </div>
        <div>
          <p className="text-sm leading-[110%] text-grey">{description}</p>
          <div>
            {old_price && (
              <p className={classNames("text-sm text-red")}>
                Old Price: ${old_price}
              </p>
            )}
            <p className={classNames("text-sm")}>Price: ${price}</p>
            <p>QTY: {quantity.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
