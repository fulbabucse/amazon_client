import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useGetCategoriesQuery } from "../../../features/categories/categoryApi";
import { usePostProductMutation } from "../../../features/products/productsApi";

const AllType = () => {
  const [urls, setUrls] = useState([]);
  const { data: categories } = useGetCategoriesQuery();
  const [postProduct, { isSuccess }] = usePostProductMutation();

  const [productData, setProductData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductPost = async (data) => {
    if (data?.images?.length > 4) {
      toast.error("You can upload up to 4 product images !!");
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < data.images.length; i++) {
      formData.append(`image`, data.images[i]);
      try {
        const response = await fetch(process.env.REACT_APP_IMGBBLINK, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        setUrls((prev) => [...prev, result.data.url]);
      } catch (error) {
        console.error(error);
      }
    }
    setProductData({ ...data });
  };

  const category = [];

  categories?.map((categoryItem) => {
    categoryItem?.sub_category?.map((subCate) => {
      category.push(subCate.link);
    });
  });

  const productInfo = { ...productData, images: urls };
  useEffect(() => {
    if (urls?.length === 4) {
      postProduct(productInfo);
      setUrls([]);
    }
  }, [urls]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added success !!");
      setUrls([]);
    }
  }, [isSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductPost)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("title", {
                required: "Title is required",
              })}
              type="text"
              label="Title"
            />
            {errors.title && (
              <p className="text-red-400 text-xs font-medium">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("author")} type="text" label="Author" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("model")} type="text" label="Model" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("color")}
              id="color"
              type="text"
              label="Color"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("connectivity_tech")}
              type="text"
              label="Connectivity Tech"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("size")} type="text" label="Size" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("style")} type="text" label="Style" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("voltage")} type="text" label="Voltage" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("capacity")} type="text" label="Capacity" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("hd_interface")}
              type="text"
              label="HD Interface"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("compatible_device")}
              type="text"
              label="Compatible"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("printing_tech")}
              type="text"
              label="Printing Technology"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("special_features")}
              type="text"
              label="Special Features"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("screen_size")}
              type="text"
              label="Screen Size"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("ram")} type="text" label="RAM" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("os")} type="text" label="Operating System" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("graphics_coprocessor")}
              type="text"
              label="Graphics Coprocessor"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("resolution")} type="text" label="Resolution" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("materials")} type="text" label="Materials" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("material_dimension")}
              type="text"
              label="Material Dimension WxH"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("item_weight")} type="text" label="Weight" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("power_source")}
              id="product_name"
              type="text"
              label="Power Source"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("refresh_rate")}
              id="product_brand"
              type="text"
              label="Refresh Rate"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("connector_type")}
              type="text"
              label="Connector Type"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("age")} type="text" label="Age" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("theme")} type="text" label="Theme" />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input {...register("brand")} type="text" label="Brand" />
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
              {...register("book_page_length")}
              type="number"
              label="Page length"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("language")}
              id="language"
              type="text"
              label="Language"
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("publication_date")}
              type="text"
              label="Publication date: August 1, 2008"
            />
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
              {...register("paper_type")}
              type="text"
              label="Paper type: Hardcover"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="relative">
              <select
                label="Select Department"
                {...register("department", {
                  required: "Department Name is required",
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
                <option className="capitalize" value="decoration">
                  decoration
                </option>
                <option className="capitalize" value="foods">
                  foods
                </option>
                <option className="capitalize" value="others">
                  others
                </option>
              </select>
              {errors.department && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.department?.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3">
            <Input
              {...register("isbn")}
              type="text"
              label="ISBN: 9780132350884"
            />
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
          <Button type="reset" size="lg" color="red">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AllType;
