import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import { useGetProductsQuery } from "../features/products/productsApi";
import Spinner from "../components/shared/Spinner";

const OurShop = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading && !isError) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex justify-center h-16 items-center bg-white">
        <Breadcrumbs className="flex items-center justify-center gap-1">
          <Link to="/" className="opacity-60">
            Home
          </Link>
          <Link to="/our-shop">Our Shop</Link>
        </Breadcrumbs>
      </div>
      <div className="px-4 lg:px-16 mt-4">
        <div className="flex gap-2">
          <div className="lg:max-w-[240px] mt-3 lg:mt-0 w-full lg:flex flex-col bg-white p-3 rounded-md">
            <h1>Category</h1>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
              {data?.products?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
