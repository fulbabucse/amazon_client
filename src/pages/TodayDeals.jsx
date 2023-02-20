import React from "react";
import ProductCard from "../components/shared/ProductCard";
import Spinner from "../components/shared/Spinner";
import { useGetAllProductsQuery } from "../features/products/productsApi";

const TodayDeals = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-xl lg:text-[24px] mb-4 font-semibold text-[#565959]">
        Crafty Hot Deals Today's
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {data?.slice(7, 22)?.map((book, index) => (
          <ProductCard key={book?._id} product={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
