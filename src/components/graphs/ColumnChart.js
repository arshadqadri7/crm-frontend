import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart = () => {
  const [sum1, setsum1] = useState();
  const [sum2, setsum2] = useState();
  const series = [
    {
      name: sum1 + " Tasks",
      data: [44, 55, 57, 56, 61],
    },
    {
      name: sum2 + " Projects",
      data: [76, 85, 101, 98, 87],
    },
  ];

  useEffect(() => {
    const a = series[0].data.reduce((partialSum, a) => partialSum + a, 0);
    const b = series[1].data.reduce((partialSum, a) => partialSum + a, 0);
    setsum1(a);
    setsum2(b);
  }, []);
  //   console.log(sum); // 6
  const options = {
    colors: ["#419BCD", "#012B51"],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    menubar: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",

      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    yaxis: {
      title: {
        // text: "$ (thousands)",
      },
      tickAmount: 5,
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return "$ " + val + " thousands";
      //     },
      //   },
    },
    legend: {
      show: true,
      position: "top",
      fontSize:13
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={280}
      />
    </>
  );
};

export default ColumnChart;
