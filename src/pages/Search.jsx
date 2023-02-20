import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/shared/ProductCard";
import Spinner from "../components/shared/Spinner";
import { useGetSearchProductsQuery } from "../features/products/productsApi";

const Search = () => {
  const { search } = useSelector((state) => state.searchFilter);
  const { data, isLoading } = useGetSearchProductsQuery(search);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-4 lg:min-h-[100vh]">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {data?.map((product, index) => (
            <ProductCard key={product?._id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-xl lg:text-2xl text-center text-[#C9563C]">
            No Products found your search criteria !!!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Search;
