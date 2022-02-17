import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { preventOverflow } from "@popperjs/core";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RadialBar = (props) => {
  const series = [70];
  const options = {
    colors: ["#012B51"],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        hollow: {
          margin: 5,
          size: "55%",
          background: "transparent",
          image: undefined,
          imageWidth: 350,
          imageHeight: 350,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: "front",
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: "#419BCD",
          strokeWidth: "100%",
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
      },
    },
    labels: ["00 : 15: 00"],
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={280}
        width={280}
      />
    </div>
  );
};

export default RadialBar;
