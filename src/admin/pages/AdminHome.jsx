import React from "react";
import { StatisticsChart } from "../charts/StatisticsChart";
import statisticsChartsData from "../data/statastisticChartData";

const AdminHome = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {statisticsChartsData?.map((data, index) => (
          <StatisticsChart key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
