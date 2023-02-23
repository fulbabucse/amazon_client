import React from "react";
import ProductCard from "../components/shared/ProductCard";
import SmallSpinner from "../components/shared/SmallSpinner";
import { useGetAllProductsQuery } from "../features/products/productsApi";

const NewRelease = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-xl lg:text-[24px] mb-4 font-semibold text-[#565959]">
        Crafty Hot New Releases
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {data?.slice(0, 15)?.map((book, index) => (
          <ProductCard key={book?._id} product={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
