import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCard from "../components/shared/ProductCard";
import { getCategoryProducts } from "../features/products/productSlice";
import Spinner from "../components/shared/Spinner";

const Products = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCategoryProducts({ category }));
  }, [category, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 my-10 lg:min-h-[100vh]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {products?.map((product, index) => (
          <ProductCard key={product?._id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
