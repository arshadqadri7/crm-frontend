import React from "react";
import { Doughnut } from "react-chartjs-2";


const data = {
  labels: ["Red", "Green", "Yellow"],

  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#012B51", "#0C5496", "#419BCD"],
      // hoverBackgroundColor: ["#012B51", "#36A2EB", "#FFCE56"],
    },

    
  ],
};
const options={
  legend: {
    display: false
  },
//   scales: {
//     yAxes: [{
//       ticks: {
//          max: this.props.maxY,
//          min: 0,
//          stepSize: 3
//        }
//      }]
//     },
//    title: {
//     display: this.props.display,
//     text: this.props.title
   
// }
}
  


const Doughnuts = () => (
  <>
    <Doughnut data={data} width={100} height={100} options={options} />
  </>
);
export default Doughnuts;
