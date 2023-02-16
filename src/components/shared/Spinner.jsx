import React from "react";

const Spinner = () => {
  return (
    <div className="relative min-h-screen">
      <div className="spinner-container absolute top-10 left-[40%]">
        <div className="spinner-sub-container">
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
