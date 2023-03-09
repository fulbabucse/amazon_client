import React from "react";
import payment from "../../assets/icons/payments.png";
import account from "../../assets/icons/account.png";
import contactUs from "../../assets/icons/contactus.png";
import order from "../../assets/icons/order.png";
import giftCard from "../../assets/icons/giftCard.png";
import messages from "../../assets/icons/messages.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const data = [
    {
      id: 1,
      name: "Your Orders",
      sub_name: "Track, returns, or buy things again",
      link: `/your-account/orders-history?ref=${email}`,
      logo: order,
    },
    {
      id: 2,
      name: "Your Profile",
      sub_name:
        "Manage, add, or remove user profiles for personalized experience",
      link: "/profiles",
      logo: account,
    },
    {
      id: 3,
      name: "Gift Card",
      sub_name: "view balance, redeem, or reload cards",
      link: "/view-balance",
      logo: giftCard,
    },
    {
      id: 4,
      name: "Your Payments",
      sub_name: "view all transactions, manage payment methods and settings",
      link: "/payments-settings",
      logo: payment,
    },
    {
      id: 5,
      name: "Customer Service",
      sub_name: "",
      link: "/customer-service",
      logo: contactUs,
    },
    {
      id: 6,
      name: "Your Messages",
      sub_name: "View messages to and from Amazon, sellers, and buyers",
      link: "/message",
      logo: messages,
    },
  ];
  return (
    <div className="w-full lg:max-w-screen-lg lg:mx-auto lg:mt-6 lg:mb-10 px-4 lg:px-0">
      <h1 className="text-[20px] lg:text-3xl text-gray-900">Your Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data?.map(({ id, name, sub_name, link, logo }) => (
          <Link
            to={link}
            key={id}
            className="flex items-center gap-3 bg-white p-3 rounded-md border border-white hover:border-blue-500 transition-all duration-200 ease-in-out"
          >
            <div className="w-20">
              <img src={logo} className="w-20 h-full" alt={name} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg">{name}</h2>
              <p className="text-[12px]">{sub_name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Account;
