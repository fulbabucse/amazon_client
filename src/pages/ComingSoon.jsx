import React from "react";
import { useParams } from "react-router";

const ComingSoon = () => {
  const { coming } = useParams();
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <h1 className="text-xl text-primary capitalize">
        {coming.split("-").join(" ")} Coming Soon...
      </h1>
    </div>
  );
};

export default ComingSoon;
