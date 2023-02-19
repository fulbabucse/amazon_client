import {
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { usePostCartMutation } from "../../features/products/cartApi";
import { useGetSingleProductQuery } from "../../features/products/productsApi";
import { getCategoryProducts } from "../../features/products/productSlice";
import Comments from "../ProductReviews/Comments";
import Reviews from "../ProductReviews/Reviews";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");

  const { data, isLoading } = useGetSingleProductQuery(id);
  const [postOrder, { isSuccess, data: orderResponse }] = usePostCartMutation();

  const {
    _id,
    title,
    price,
    rating,
    description,
    brand,
    category,
    images = [],
    department,
  } = data || {};

  useEffect(() => {
    dispatch(getCategoryProducts({ category }));
  }, [category, dispatch]);

  const { products } = useSelector((state) => state.products);
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  const splitDesc = description?.split("--");

  const discountedPrice = (price / 100) * (100 - 5);

  const tabsData = [
    {
      label: "Review",
      value: "review",
      desc: <Reviews product={data} />,
    },
    {
      label: "Comments",
      value: "comments",
      desc: <Comments />,
    },
  ];

  useEffect(() => {
    if (isSuccess) {
      toast.success(orderResponse.message);
      return;
    }
  }, [isSuccess, orderResponse]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddToCart = () => {
    if (quantity <= 0 || quantity === undefined) {
      toast.error("Select quantity");
      return;
    }

    if (size === "") {
      toast.error("Select size");
      return;
    }

    const product = {
      productId: _id,
      email,
      price: discountedPrice,
      quantity,
      size,
    };
    postOrder(product);
  };

  return (
    <div className="px-4 py-6 bg-white">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-6 gap-0">
        <div className="lg:flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-3">
                {images?.map((image, index) => {
                  return (
                    <figure
                      key={index}
                      className="cursor-pointer overflow-hidden hover:bg-primaryColor transition-all duration-300"
                    >
                      <img
                        className="w-20 h-20 object-cover object-center rounded hover:scale-110 transition-all duration-1000 ease-in-out transform-gpu"
                        src={image}
                        alt={title}
                        onMouseOver={() => setImageURL(image)}
                      />
                    </figure>
                  );
                })}
              </div>
              <div className="overflow-hidden transition-all duration-300">
                <InnerImageZoom
                  src={imageURL || images[0]}
                  width={400}
                  height={500}
                  hasSpacer={true}
                  zoomSrc={imageURL || images[0]}
                  zoomType="hover"
                  fadeDuration={150}
                  zoomPreload={true}
                  fullscreenOnMobile={false}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg lg:text-[24px] text-gray-800 border-b border-b-gray-400 pb-3 capitalize">
                {title}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#C9563C] cursor-pointer">
                    {ratingStar}
                  </div>
                  <p className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer">
                    {rating} ratings
                  </p>
                </div>
                <div className="border-l border-l-gray-400 pl-3">
                  <p className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer">
                    {brand}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer">
                  10 Answered Question
                </p>
                <div className="border-l border-l-gray-400 pl-3">
                  <Link
                    to={`/products/${category}`}
                    className="text-[#007185] hover:text-[#C9563C] hover:underline hover:underline-offset-4 hover:decoration-[#C9563C] cursor-pointer capitalize"
                  >
                    {category?.split("-").join(" ")}
                  </Link>
                </div>
              </div>
              <div className="text-gray-700 space-y-1">
                <p>
                  Last Price: <del>${price}</del>
                </p>
                <p className="ml-9">
                  Price
                  <span className="text-[#C9563C] font-medium ml-2 relative">
                    <span className="text-3xl">$</span>
                    <span className="text-3xl">
                      {discountedPrice?.toFixed(2)?.split(".")[0]}
                    </span>
                    <span className="absolute -right-6 -top-5 text-lg">
                      {discountedPrice?.toFixed(2)?.split(".")[1]}
                    </span>
                  </span>
                </p>
                <p>
                  You Save:
                  <span className="text-[#C9563C] font-medium ml-2">
                    ${((price / 100) * 5)?.toFixed(2)} ({5}%)
                  </span>
                </p>
              </div>

              {department === "fashions" && (
                <div className="flex items-center gap-2 w-32">
                  <h3>Size:</h3>
                  <Select defaultValue="" label="Select Size">
                    <Option value="sm" onClick={() => setSize("sm")}>
                      Small
                    </Option>
                    <Option value="md" onClick={() => setSize("md")}>
                      Medium
                    </Option>
                    <Option value="lg" onClick={() => setSize("lg")}>
                      Large
                    </Option>
                    <Option value="xl" onClick={() => setSize("xl")}>
                      X-Large
                    </Option>
                  </Select>
                </div>
              )}
              <div className="mt-3">
                <h1 className="text-gray-800 font-openSans font-bold text-lg">
                  About this item:
                </h1>
                <div className="flex flex-col gap-1">
                  {splitDesc?.map((text, index) => (
                    <div key={index} className="flex gap-2">
                      <div>
                        <BsDot size={20} />
                      </div>
                      <p className="text-[15px] text-justify">
                        {text.length > 0 && text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Tabs value="html">
              <TabsHeader className="lg:w-96 w-full">
                {tabsData?.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="w-full">
                {tabsData?.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
        <div className="w-full lg:w-[300px] mt-4 lg:mt-0">
          <div className="p-5 border border-gray-500 rounded-md">
            <span className="text-primary font-medium ml-2 relative">
              <span className="text-3xl">$</span>
              <span className="text-3xl">
                {discountedPrice?.toFixed(2)?.split(".")[0]}
              </span>
              <span className="absolute -right-6 -top-5 text-lg">
                {discountedPrice?.toFixed(2)?.split(".")[1]}
              </span>
            </span>

            <p className="text-lg text-[#007185]">In Stock</p>
            <div className="mt-3">
              <Select label="Quantity" size="sm">
                {[...Array(10)]?.map((_, index) => (
                  <Option
                    onClick={() => setQuantity(index + 1)}
                    key={index}
                    className="overflow-y-scroll"
                  >
                    {index + 1}
                  </Option>
                ))}
              </Select>
            </div>
            {email ? (
              <button
                onClick={handleAddToCart}
                className="w-full px-4 py-[6px] text-[14px] bg-[#FFA41C] text-primary transition-colors hover:bg-[#FA8900] font-medium duration-200 ease-in-out rounded-full text-center mt-2 "
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => navigate("/sign-in")}
                className="w-full px-4 py-[6px] text-[14px] bg-[#FFA41C] text-primary transition-colors hover:bg-[#FA8900] font-medium duration-200 ease-in-out rounded-full text-center mt-2 "
              >
                Add to Cart
              </button>
            )}

            <div className="border-b border-b-gray-300 mt-2"></div>
            <button className="w-full px-4 py-1 text-sm text-primary transition-colors bg-opacity-20 font-medium duration-200 hover:bg-[#007185] hover:bg-opacity-10 ease-in-out rounded-md mt-2 border border-gray-500 text-start">
              Add to List
            </button>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-[#C9563C] text-[18px]">
          Related products with standard delivery on eligible orders
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-2">
          {products
            ?.filter((product) => {
              const filteredProducts = product?._id !== id;
              return filteredProducts;
            })
            ?.map((product) => (
              <>
                <ProductCard key={product?._id} product={product} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
