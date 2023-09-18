import React from "react";
import styles from "./styles.module.scss";
import Crown from "../assets/icons/Crown";
import Star from "../assets/icons/Star";
import Van from "../assets/icons/Van";
import Pin from "../assets/icons/Pin";
import Tag from "../assets/icons/Tag";
import Link from "next/link";
import classNames from "classnames";

const Secondary = () => {
  const navItems = [
    {
      title: "Exclusive Deals for VIP 2 and up!",
      icon: <Crown />,
      link: "#",
    },
    {
      title: "Weekly New Arrivals",
      icon: <Star />,
      link: "#",
    },
    {
      title: "Free Shipping On Orders Over $100",
      icon: <Van />,
      link: "#",
    },
    {
      title: "Track Your Order",
      icon: <Pin />,
      link: "#",
    },
    {
      title: "10% Off On Your First Order!",
      icon: <Tag />,
      link: "#",
    },
  ];
  return (
    <div className="bg-lightGrey">
      <div className={classNames("main-container", styles.secondary)}>
        {navItems.map((item, index) => {
          const { title, link, icon } = item;
          return (
            <Link href={link}>
              <div className="flex items-center gap-[15px]">
                {icon} <p className="text-xs">{title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Secondary;
