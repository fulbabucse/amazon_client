import React, { useState } from "react";
import { useGetAdminAllProductsQuery } from "../../features/admin/adminProductApi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
import { useDeleteProductMutation } from "../../features/products/productsApi";
import SmallSpinner from "../../components/shared/SmallSpinner";

const AllProducts = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(25);

  const { data, isLoading } = useGetAdminAllProductsQuery({ page, size });
  const [deleteProduct] = useDeleteProductMutation();

  const pages = Math.ceil(data?.count / size);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-3 py-4 font-medium text-gray-900">
                Stock
              </th>
              <th scope="col" className="px-3 py-4 font-medium text-gray-900">
                Category
              </th>
              <th scope="col" className="px-3 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-3 py-4 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {data?.products?.map(
              ({ _id, title, thumbnail, brand, category, price, stock }) => (
                <tr key={_id} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-3 py-2 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={thumbnail}
                        alt={title}
                      />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 capitalize text-xs">
                        {title.length > 20 ? title.slice(0, 20) : title}
                      </div>
                      <div className="text-gray-400 cap">{brand}</div>
                    </div>
                  </th>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      {stock}
                    </span>
                  </td>
                  <td className="px-3 py-2">{category}</td>
                  <td className="px-3 py-2">
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        {price}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex justify-start gap-4">
                      <button onClick={() => handleDeleteProduct(_id)}>
                        <IconButton color="red">
                          <AiFillDelete size={20} />
                        </IconButton>
                      </button>
                      <IconButton>
                        <MdOutlineEditNote size={20} />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
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
  );
};

export default AllProducts;
