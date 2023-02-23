import React from "react";
import ProductCard from "../components/shared/ProductCard";
import SmallSpinner from "../components/shared/SmallSpinner";
import { useGetFashionProductsQuery } from "../features/products/productsApi";

const Fashion = () => {
  const { data, isLoading } = useGetFashionProductsQuery();

  if (isLoading) {
    return <SmallSpinner />;
  }
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {data?.map((fashion, index) => (
          <ProductCard key={fashion?._id} product={fashion} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Fashion;
