import React from "react";
import HistoryCard from "../components/shared/HistoryCard";

const AllHistory = () => {
  const data = JSON.parse(localStorage.getItem("browsing_history"));

  const handleRemoveHistory = () => {
    localStorage.removeItem("browsing_history");
  };

  return (
    <div className="px-4 min-h-screen">
      <div className="flex items-center justify-between flex-wrap my-2">
        <h1 className="text-2xl">Your Browsing History</h1>
        <button
          type="button"
          onClick={handleRemoveHistory}
          style={{ fontSize: "13px", fontWeight: "500" }}
          className="py-[3px] capitalize border-[1px] border-gray-300 px-3 text-base rounded-[5px] outline-none focus-within:border-[#008296] focus-within:shadow-selectShadow duration-100 text-primary"
        >
          Remove all items from view
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
        {data?.map((product) => (
          <HistoryCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllHistory;
