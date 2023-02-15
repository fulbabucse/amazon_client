import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

import { BsCurrencyDollar, BsBarChart } from "react-icons/bs";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";

const Stats = () => {
  const statisticsCardsData = [
    {
      color: "blue",
      icon: <BsCurrencyDollar size={30} />,
      title: "Today's Money",
      value: "$53k",
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
    {
      color: "pink",
      icon: <FaUserAlt size={25} />,
      title: "Today's Users",
      value: "2,300",
      footer: {
        color: "text-green-500",
        value: "+3%",
        label: "than last month",
      },
    },
    {
      color: "green",
      icon: <FaUserPlus size={25} />,
      title: "New Clients",
      value: "3,462",
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
    {
      color: "orange",
      icon: <BsBarChart size={25} />,
      title: "Sales",
      value: "$103,430",
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {statisticsCardsData?.map(({ color, icon, title, value, footer }) => (
        <Card key={title}>
          <CardHeader
            variant="gradient"
            color={color}
            className="absolute -mt-4 grid h-16 w-16 place-items-center"
          >
            {icon}
          </CardHeader>
          <CardBody className="p-4 text-right">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-600"
            >
              {title}
            </Typography>
            <Typography variant="h4" color="blue-gray">
              {value}
            </Typography>
          </CardBody>
          {footer && (
            <CardFooter className="border-t border-blue-gray-50 p-4 flex items-center gap-2">
              <p className={footer.color}>{footer.value}</p>
              <p>{footer.label}</p>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Stats;
