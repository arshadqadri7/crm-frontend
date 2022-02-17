import React from "react";
// import ReactApexChart from 'react-apexcharts'
import dynamic from "next/dynamic";
 const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Donut = ({series, options}) => {
 
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={300}
      />
    </>
  );
};

export default Donut;
