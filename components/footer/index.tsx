import React from "react";
import Signup from "./Signup";
import Information from "./Information";
import SocialMedia from "./SocialMedia";
import AcceptedCards from "./AcceptedCards";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <div>
      <Signup />
      <div className="main-container p-10">
        <div className="flex gap-[112px]">
          <Information />
          <div>
            <SocialMedia />
            <AcceptedCards />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <p className="text-xs">©2021 THREADED All Rights Reserved.</p>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
