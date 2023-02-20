import React from "react";
import ProductCard from "../components/shared/ProductCard";
import Spinner from "../components/shared/Spinner";
import { useGetAllProductsQuery } from "../features/products/productsApi";

const BestSeller = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {data
          ?.filter((product) => {
            if (product.rating >= 4.8) {
              return product;
            }
          })
          ?.map((book, index) => (
            <ProductCard key={book?._id} product={book} index={index} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
