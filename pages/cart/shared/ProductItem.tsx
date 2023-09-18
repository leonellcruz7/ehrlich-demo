import { ProductCardPropTypes } from "@/components/shared/ProductCard/types";
import { CartRootState, addToCart } from "@/redux/cart";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem: FC<ProductCardPropTypes> = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: CartRootState) => state.cart);
  const quantity = cart.filter((product) => product.id === item.id);

  const handleRemove = () => {
    const newArr = [...cart];
    const indexToRemove = newArr.indexOf(item);
    if (indexToRemove !== -1) {
      newArr.splice(indexToRemove, 1);
    }
    dispatch(addToCart(newArr));
  };
  return (
    <div className="w-full flex justify-between border-t-[1px] border-lightGrey py-4">
      <div className="flex gap-4">
        <div className="w-[80px] h-[100px] bg-grey">
          <Image width={80} height={120} alt="" src={item?.image} />
        </div>
        <div className="flex flex-col justify-between">
          <p>{item?.description}</p>
          <button onClick={handleRemove} className="w-fit text-xs text-[blue]">
            <i className="text-red text-[24px] ri-delete-bin-line"></i>
          </button>
        </div>
      </div>
      <p className="font-semibold">
        ${item?.price} x {quantity.length}
      </p>
    </div>
  );
};

export default ProductItem;
