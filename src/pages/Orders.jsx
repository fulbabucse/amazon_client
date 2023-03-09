import React from "react";
import { useSelector } from "react-redux";
import SmallSpinner from "../components/shared/SmallSpinner";
import { useGetOrdersQuery } from "../features/payments/paymentsApi";

const Orders = () => {
  const {
    user: { photoURL },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetOrdersQuery();

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div className="w-full lg:max-w-screen-lg lg:mx-auto lg:my-6 px-4 lg:px-0">
      <h1 className="text-[20px] lg:text-3xl text-gray-900">Your Orders</h1>

      {data?.length > 0 ? (
        <div class="bg-white p-4 rounded-md w-full mt-2">
          <div class=" flex items-center justify-between">
            <div>
              <span class="text-sm">All completed orders</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  class="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div>
            </div>
          </div>
          <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Biller Name
                      </th>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        products Qty
                      </th>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Payment Date
                      </th>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Transaction No.
                      </th>
                      <th class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map(
                      ({
                        customer_name,
                        price,
                        products,
                        payment_date,
                        trans_id,
                      }) => (
                        <tr>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 w-10 h-10">
                                <img class={photoURL} alt={customer_name} />
                              </div>
                              <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                  {customer_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {products?.length}
                            </p>
                          </td>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {payment_date}
                            </p>
                          </td>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {price}
                            </p>
                          </td>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <span class="relative">{trans_id}</span>
                          </td>
                          <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">Invoice</span>
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                {data?.length > 10 && (
                  <div class="px-2 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span class="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of {data?.length} Entries
                    </span>
                    <div class="inline-flex mt-2 xs:mt-0">
                      <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-[20px] text-red-500">Empty Orders</h1>
      )}
    </div>
  );
};

export default Orders;
