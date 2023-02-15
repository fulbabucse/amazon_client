import {
  Breadcrumbs,
  Button,
  Checkbox,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard";
import { useGetProductsQuery } from "../features/products/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBrands,
  filterRating,
  filterStartPrice,
  filterEndPrice,
  sortByPrice,
} from "../features/products/filterSlice";
import { BsCurrencyDollar, BsBorderAll } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";
import { FaBars, FaStar } from "react-icons/fa";
const OurShop = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const { ratings, startPrice, endPrice, sortPrice } = filter;

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(25);
  const { data } = useGetProductsQuery({
    start: startPrice,
    end: endPrice,
    page,
    size,
    rating: ratings,
  });

  const pages = Math.ceil(data?.count / size);

  let brands = [];

  data?.products?.map((product) => {
    if (!brands?.includes(product.brand)) {
      brands.push(product.brand);
    }
  });

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

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
          <div className="lg:max-w-[240px] my-3 lg:mt-0 w-full space-y-2">
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
                <Input
                  onBlur={(e) =>
                    dispatch(filterStartPrice(parseInt(e.target.value)))
                  }
                  label="From"
                  icon={<BsCurrencyDollar />}
                />
                <Input
                  onBlur={(e) =>
                    dispatch(filterEndPrice(parseInt(e.target.value)))
                  }
                  label="To"
                  icon={<BsCurrencyDollar />}
                />
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
                    <Option onClick={() => dispatch(sortByPrice(1))}>
                      Price low to high
                    </Option>
                    <Option onClick={() => dispatch(sortByPrice(0))}>
                      Price high to low
                    </Option>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm">
                  {data?.products?.length} products found
                </p>
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
                ?.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
            </div>

            <nav
              className="flex justify-between items-center my-4"
              aria-label="Page navigation"
            >
              <div>
                <select
                  onChange={(e) => setSize(e.target.value)}
                  defaultValue={data?.products?.length}
                  className="form-select appearance-none
      block
      w-20
      px-3
      py-1
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
              <ul className="inline-flex">
                <li>
                  <button
                    onClick={() => handlePrev()}
                    disabled={page === 0}
                    className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
                  >
                    Prev
                  </button>
                </li>
                {pages &&
                  [...Array(pages)?.keys()]?.map((index) => (
                    <li key={index}>
                      <button
                        onClick={() => setPage(index)}
                        className={`${
                          page === index
                            ? "h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 focus:shadow-outline"
                            : "h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                <li>
                  <button
                    onClick={() => handleNext()}
                    disabled={page + 1 === pages}
                    className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
