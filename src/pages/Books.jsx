import React from "react";
import ProductCard from "../components/shared/ProductCard";
import Spinner from "../components/shared/Spinner";
import { useGetBooksQuery } from "../features/products/productsApi";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {data?.map((book, index) => (
          <ProductCard key={book?._id} product={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Books;
