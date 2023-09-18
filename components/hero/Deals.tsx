import React from "react";
import styles from "./styles.module.scss";
const Deals = () => {
  const deals = [
    {
      amount: 5,
      description: "on orders above $50",
    },
    {
      amount: 15,
      description: "on orders above $75",
    },
    {
      amount: 20,
      description: "on orders above $150",
    },
    {
      amount: 30,
      description: "on orders above $200",
    },
  ];
  return (
    <div className={styles.dealsContainer}>
      {deals.map((deal, index) => {
        const { amount, description } = deal;
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold">${amount}</p>
              <p className="text-md font-extrabold">OFF</p>
            </div>
            <p className="uppercase text-xxs">{description}</p>
          </div>
        );
      })}
      <button className="button black small">
        check out all site-wide deals
      </button>
    </div>
  );
};

export default Deals;
