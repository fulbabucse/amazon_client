import {
  Breadcrumbs,
  Button,
  Checkbox,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import { useGetProductsQuery } from "../features/products/productsApi";
import Spinner from "../components/shared/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { filterBrands, filterRating } from "../features/products/filterSlice";
import { BsCurrencyDollar, BsBorderAll } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";
import { FaBars, FaStar } from "react-icons/fa";

const OurShop = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetProductsQuery();
  const { filter } = useSelector((state) => state.filter);

  if (isLoading && !isError) {
    return <Spinner />;
  }

  let brands = [];

  data?.products?.slice(10, 25)?.map((product) => {
    if (!brands.includes(product.brand)) {
      brands.push(product.brand);
    }
  });

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
      <div className="lg:px-10 mt-4">
        <div className="flex flex-wrap gap-2">
          <div className="lg:max-w-[240px] mt-3 lg:mt-0 w-full space-y-2">
            <div className="bg-white p-3">
              <h1 className="text-xl font-semibold text-primary mb-3">Bands</h1>
              <div className="flex flex-col">
                {brands?.map((brand) => (
                  <Checkbox
                    onClick={() => dispatch(filterBrands(brand))}
                    id={brand}
                    label={brand}
                    className="text-xs"
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-3">
              <h1 className="text-xl font-semibold text-primary mb-3">Price</h1>
              <div className="flex flex-col justify-center items-center gap-2">
                <Input label="From" icon={<BsCurrencyDollar />} />
                <Input label="To" icon={<BsCurrencyDollar />} />
                <Button className="py-0">
                  <RxTriangleRight size={40} />
                </Button>
              </div>
            </div>
            <div className="bg-white p-3">
              <h1 className="text-xl font-semibold text-primary mb-3">
                Rating
              </h1>
              <div className="flex flex-col space-y-2">
                <div>
                  <button
                    onClick={() => dispatch(filterRating(5))}
                    className="flex text-yellow-300 gap-1 text-xl"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(filterRating(4))}
                    className="flex text-yellow-300 gap-1 text-xl"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <span className="text-gray-700 text-sm">And Up</span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(filterRating(3))}
                    className="flex text-yellow-300 gap-1 text-xl"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <span className="text-gray-700 text-sm">And Up</span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(filterRating(2))}
                    className="flex text-yellow-300 gap-1 text-xl"
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <span className="text-gray-700 text-sm">And Up</span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(filterRating(1))}
                    className="flex text-yellow-300 gap-1 text-xl"
                  >
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                    <span className="text-gray-700 text-sm">And Up</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-3">
              <h1 className="text-xl font-semibold text-primary mb-3">
                Colors
              </h1>
              <div className="flex flex-col">
                <Checkbox id="black" label="Black" className="text-xs" />
                <Checkbox id="blue" label="Blue" className="text-xs" />
                <Checkbox id="red" label="Red" className="text-xs" />
                <Checkbox
                  id="navy-blue"
                  label="Navy Blue"
                  className="text-xs"
                />
                <Checkbox id="gray" label="Gray" className="text-xs" />
              </div>
            </div>

            <div className="bg-white p-3">
              <h1 className="text-xl font-semibold text-primary mb-3">
                Availability
              </h1>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <Checkbox
                    id="in-stock"
                    label="In Stock"
                    className="text-xs"
                  />
                  <p className="text-xs text-primary">(25)</p>
                </div>
                <div className="flex justify-between items-center">
                  <Checkbox
                    id="out-of-stock"
                    label="Out of Stock"
                    className="text-xs"
                  />
                  <p className="text-xs text-primary">(2)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-md py-2 px-4 flex flex-wrap lg:flex-nowrap justify-between items-center">
              <div className="flex items-center gap-6">
                <p className="text-sm">Sort By:</p>
                <div className="w-40">
                  <Select size="md" label="Best Selling">
                    <Option>Price low to high</Option>
                    <Option>Price high to low</Option>
                    <Option>A to Z</Option>
                    <Option>Z to A</Option>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">15 products found</p>
                <button className="bg-primary text-white p-1 rounded-md">
                  <FaBars />
                </button>
                <button className="bg-primary text-white p-1 rounded-md">
                  <BsBorderAll />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-2">
              {data?.products
                ?.slice(10, 25)
                ?.filter((product) => {
                  if (filter.brands.length) {
                    return filter.brands.includes(product.brand);
                  }
                  return product;
                })
                ?.filter((product) => {
                  if (filter.ratings === 5) {
                    return product.rating > 4.5;
                  } else if (filter.ratings === 4) {
                    return product.rating > 3 && product.rating < 4.5;
                  } else if (filter.ratings === 3) {
                    return product.rating > 2 && product.rating <= 3;
                  } else if (filter.ratings === 2) {
                    return product.rating > 1;
                  }
                  return product;
                })
                ?.map((product) => (
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
