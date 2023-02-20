import { Checkbox, Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsBorderAll } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "../components/shared/ListCard";
import ProductCard from "../components/shared/ProductCard";
import Spinner from "../components/shared/Spinner";
import {
  cardStyle,
  filterBrands,
  sortByPrice,
} from "../features/products/filterSlice";
import { useGetSearchProductsQuery } from "../features/products/productsApi";

const Search = () => {
  const { search } = useSelector((state) => state.searchFilter);
  const { data, isLoading } = useGetSearchProductsQuery(search);
  const { filter } = useSelector((state) => state.filter);
  const { sortPrice, card } = filter;
  const dispatch = useDispatch();

  if (isLoading) {
    return <Spinner />;
  }

  let brands = [];

  data?.map((product) => {
    if (!brands?.includes(product.brand)) {
      brands.push(product.brand);
    }
  });

  return (
    <div className="p-4 lg:min-h-[100vh]">
      {data?.length > 0 ? (
        <div className="lg:px-4 mt-4">
          <div className="flex flex-wrap gap-2">
            <div className="lg:max-w-[240px] my-3 lg:mt-0 w-full space-y-2">
              <div className="bg-white p-3">
                <h1 className="text-xl font-semibold text-primary mb-3">
                  Bands
                </h1>
                <div className="flex flex-col">
                  {brands?.map((brand, index) => (
                    <Checkbox
                      key={index}
                      onClick={() => dispatch(filterBrands(brand))}
                      id={brand}
                      label={brand}
                      className="text-xs"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:flex-1 w-full">
              <div className="bg-white rounded-md py-2 px-4 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:justify-between lg:items-center gap-4 lg:gap-0 w-full">
                <div className="flex items-center gap-6">
                  <p className="text-sm">Sort By:</p>
                  <div className="w-40">
                    <Select defaultValue="" size="md" label="Best Selling">
                      <Option
                        defaultValue=""
                        onClick={() => dispatch(sortByPrice(1))}
                      >
                        Price low to high
                      </Option>
                      <Option
                        defaultValue=""
                        onClick={() => dispatch(sortByPrice(0))}
                      >
                        Price high to low
                      </Option>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <p className="text-sm">
                    {data?.length} products found for
                    <strong className="ml-1 text-[#C9563C]">
                      {search.key}
                    </strong>
                  </p>
                  <button
                    onClick={() => dispatch(cardStyle("list"))}
                    className="bg-primary text-white p-1 rounded-md"
                  >
                    <FaBars />
                  </button>
                  <button
                    onClick={() => dispatch(cardStyle("grid"))}
                    className="bg-primary text-white p-1 rounded-md"
                  >
                    <BsBorderAll />
                  </button>
                </div>
              </div>
              <div
                className={`${
                  card === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
                    : "grid grid-cols-1"
                } mt-2 gap-2`}
              >
                {card === "grid"
                  ? data
                      ?.filter((product) => {
                        if (filter?.brands?.length) {
                          return filter?.brands?.includes(product.brand);
                        }
                        return product;
                      })
                      ?.sort((a, b) => {
                        if (sortPrice === 1) {
                          return a.price - b.price;
                        } else {
                          return b.price - a.price;
                        }
                      })
                      ?.map((product, index) => (
                        <ProductCard
                          key={product?._id}
                          product={product}
                          index={index}
                        />
                      ))
                  : data
                      ?.filter((product) => {
                        if (filter?.brands?.length) {
                          return filter?.brands?.includes(product.brand);
                        }
                        return product;
                      })
                      ?.sort((a, b) => {
                        if (sortPrice === 1) {
                          return a.price - b.price;
                        } else {
                          return b.price - a.price;
                        }
                      })
                      ?.map((product, index) => (
                        <ListCard
                          key={product?._id}
                          product={product}
                          index={index}
                        />
                      ))}
              </div>
            </div>
          </div>
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
