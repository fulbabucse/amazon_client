import React from "react";
import NewCard from "./shared/NewCard";

const NewArrival = () => {
  const data = [
    {
      id: 1,
      name: "New arrivals in Toys",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
      link: `http://localhost:3000/products/toys/toys`,
    },
    {
      id: 2,
      name: "For your Fitness Needs",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
      link: "new-fitness",
    },
    {
      id: 3,
      name: "Shop activity trackers and smartwatches",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg",
      link: `http://localhost:3000/products/women's-fashion/womens-watches`,
    },
    {
      id: 4,
      name: "Shop Laptops & Tablets",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
      link: `http://localhost:3000/products/computers/laptops`,
    },
  ];
  return (
    <div className="lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item) => (
          <NewCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
