import visa from "@/public/visa.svg";
import mastercard from "@/public/mastercard.svg";
import maestro from "@/public/maestro.svg";
import americanexpress from "@/public/americanexpress.svg";
import paypal from "@/public/paypal.svg";

export const footerList = [
  {
    title: "company info",
    list: [
      {
        title: "about THREADED",
        link: "#",
      },
      {
        title: "affiliate",
        link: "#",
      },
      {
        title: "blog",
        link: "#",
      },
      {
        title: "careers",
        link: "#",
      },
    ],
  },
  {
    title: "help & support",
    list: [
      {
        title: "FAQ",
        link: "#",
      },
      {
        title: "shipping",
        link: "#",
      },
      {
        title: "returns",
        link: "#",
      },
      {
        title: "how to order",
        link: "#",
      },
      {
        title: "how to track",
        link: "#",
      },
    ],
  },
  {
    title: "customer care",
    list: [
      {
        title: "contact us",
        link: "#",
      },
      {
        title: "payment methods",
        link: "#",
      },
    ],
  },
];

export const socialMediaList = [
  {
    icon: <i className="text-[20px] ri-facebook-fill"></i>,
    link: "#",
  },
  {
    icon: <i className="text-[20px] ri-instagram-line"></i>,
    link: "#",
  },
  {
    icon: <i className="text-[20px] ri-twitter-fill"></i>,
    link: "#",
  },
  {
    icon: <i className="text-[20px] ri-youtube-fill"></i>,
    link: "#",
  },
  {
    icon: <i className="text-[20px] ri-pinterest-line"></i>,
    link: "#",
  },
  {
    icon: <i className="text-[20px] ri-tiktok-fill"></i>,
    link: "#",
  },
];

export const acceptedCards = [
  visa,
  mastercard,
  maestro,
  americanexpress,
  paypal,
];
