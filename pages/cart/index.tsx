import Layout from "@/components/layout";
import { CartRootState } from "@/redux/cart";
import React from "react";
import { useSelector } from "react-redux";
import ShoppingBag from "./shared/ShoppingBag";

const Cart = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);
  return (
    <Layout>
      <div className="main-container p-10">
        <div className="flex justify-between">
          <div>
            <p className="uppercase font-semibold">
              shopping bag ({cart.length})
            </p>
            <p>Sign In to sync your bag accross your devices</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Need help? 01954208301</p>
            <div className="flex items-center gap-2">
              <i className="ri-chat-1-line"></i>
              <p>Let's chat</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <ShoppingBag />
          <OrderSummary />
        </div>
      </div>
    </Layout>
  );
};

const OrderSummary = () => {
  const { cart } = useSelector((state: CartRootState) => state.cart);

  return (
    <div className="min-w-[30%] flex flex-col items-center gap-2">
      <p className="font-semibold uppercase">order summary</p>
      <div className="w-full border-[1px] p-4">
        <div className="flex justify-between">
          <p>Subtotal ({cart.length})</p>
          <p>$200</p>
        </div>

        <p>Free Shipping!</p>

        <div className="divider horizontal my-8"></div>

        <div className="flex justify-between">
          <p className="font-semibold">Estimated total</p>
          <p>$200</p>
        </div>
      </div>
      <button className="button black small full">checkout as a guest</button>
      <button className="button black small full">
        sign in for faster checkout
      </button>
    </div>
  );
};

export default Cart;
