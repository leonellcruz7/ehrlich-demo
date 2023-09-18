import React from "react";

const Signup = () => {
  return (
    <div className="h-[75px] bg-black flex items-center">
      <div className="main-container w-full flex items-center justify-between px-[118px]">
        <p className="text-white text-xl font-extrabold uppercase">
          sign up for exclusive deals and updates
        </p>
        <div className="flex w-full max-w-[354px]">
          <input
            type="text"
            className="input"
            placeholder="Your Email Address"
          />
          <div className="min-w-[35px] bg-white flex items-center justify-center">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
