import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useGetCategoriesQuery } from "../../../features/categories/categoryApi";
import { usePostBookProductMutation } from "../../../features/products/productsApi";
import convertBase64 from "../../../utils/convertBase64";

const AllType = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [postProduct, { isSuccess }] = usePostBookProductMutation();
  const [images, setImages] = useState([]);
  const [bookData, setBookData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleProductPost = (data) => {
    // Array.from(data.images).forEach(async (image) => {
    //   const base64 = await convertBase64(image);
    //   setImages((prev) => [...prev, base64]);
    // });
    // setBookData({ ...data });
    console.log(data);
  };

  const category = [];

  categories?.map((categoryItem) => {
    categoryItem?.sub_category?.map((subCate) => {
      category.push(subCate.link);
    });
  });

  const productInfo = { ...bookData, images };
  useEffect(() => {
    if (images.length > 0) {
      postProduct(productInfo);
      reset();
      setImages([]);
    }

    if (isSuccess) {
      toast.success("Product added success !!");
    }
  }, [images]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductPost)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <Input
              {...register("title", {
                required: "Product Name is required",
              })}
              id="product_name"
              type="text"
              label="Book Name: Clean Code"
            />
            {errors.title && (
              <p className="text-red-400 text-xs font-medium">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              {...register("author", {
                required: "Author is required",
              })}
              id="product_brand"
              type="text"
              label="Author: Robert C. Martin"
            />
            {errors.author && (
              <p className="text-red-400 text-xs font-medium">
                {errors.author?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("price", {
                required: "Price is required",
              })}
              id="product_price"
              type="text"
              label="Price: $999.00"
            />
            {errors.price && (
              <p className="text-red-400 text-xs font-medium">
                {errors.price?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("stock", {
                required: "Stock Size is required",
              })}
              id="product_stock"
              type="text"
              label="Stock: 100 Pieces"
            />
            {errors.stock && (
              <p className="text-red-400 text-xs font-medium">
                {errors.stock?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("rating", {
                required: "Rating is required",
              })}
              id="product_rating"
              type="text"
              label="Rating: 4.9"
            />
            {errors.rating && (
              <p className="text-red-400 text-xs font-medium">
                {errors.rating?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("book_page_length", {
                required: "Page length is required",
              })}
              id="book_page_length"
              type="text"
              label="Page length: 150 pages"
            />
            {errors.book_page_length && (
              <p className="text-red-400 text-xs font-medium">
                {errors.book_page_length?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("language", {
                required: "Language is required",
              })}
              id="language"
              type="text"
              label="Language: English"
            />
            {errors.language && (
              <p className="text-red-400 text-xs font-medium">
                {errors.language?.message}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("publication_date", {
                required: "Publication date is required",
              })}
              id="publication_date"
              type="text"
              label="Publication date: August 1, 2008"
            />
            {errors.publication_date && (
              <p className="text-red-400 text-xs font-medium">
                {errors.publication_date?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("discountPercentage")}
              id="discount_percent"
              type="text"
              label="Discount: 7.36%"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                label="Select Category"
                {...register("category", {
                  required: "Category Name is required",
                })}
                className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-gray-500 cursor-pointer focus:border-blue-500"
                // onClick={(e) => setCategoryText(e.target.value)}
                name="category"
              >
                {category?.map((cate, index) => (
                  <option key={index} className="capitalize" value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && (
              <p className="text-red-400 text-xs font-medium">
                {errors.category?.message}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("images", {
                required: "Images is required",
              })}
              type="file"
              label="Images"
              multiple
            />
            {errors.images && (
              <p className="text-red-400 text-xs font-medium">
                {errors.images?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("paper_type", {
                required: "Paper type is required",
              })}
              type="text"
              label="Paper type: Hardcover"
            />
            {errors.paper_type && (
              <p className="text-red-400 text-xs font-medium">
                {errors.paper_type?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                label="Select Department"
                {...register("department", {
                  required: "Category Name is required",
                })}
                // onClick={(e) => setDepartment(e.target.value)}
                name="department"
                className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-gray-500 cursor-pointer focus:border-blue-500"
              >
                <option className="capitalize" value="fashion">
                  fashion
                </option>
                <option className="capitalize" value="computers">
                  computers
                </option>
                <option className="capitalize" value="electronics">
                  electronics
                </option>
                <option className="capitalize" value="automotive">
                  automotive
                </option>
                <option className="capitalize" value="cosmetics">
                  cosmetics
                </option>
                <option className="capitalize" value="books">
                  books
                </option>
              </select>
            </div>
            {errors.department && (
              <p className="text-red-400 text-xs font-medium">
                {errors.department?.message}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("isbn", {
                required: "ISBN is required",
              })}
              type="text"
              label="ISBN: 9780132350884"
            />
            {errors.isbn && (
              <p className="text-red-400 text-xs font-medium">
                {errors.isbn?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-5">
          <div className="w-full px-3">
            <Textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="product_descriptions"
              type="text"
              label="Description: Every single line split by double '-' symbol [important]"
            />
            {errors.description && (
              <p className="text-red-400 text-xs font-medium">
                {errors.description?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-3">
          <Button type="submit" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AllType;
