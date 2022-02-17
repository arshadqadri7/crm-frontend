import Image from "next/image";
import React from "react";
import Donut from "../components/graphs/Donut";
import StartTracking from "../components/modals/StartTracking";
import Thisweek from "../components/timetracking/Thisweek";

const timetracking = () => {
  const tasksData = [
    {
      project: "project",
      text: "Website analysis",
      date: "24.11.2021",
      completeTask: "Complete Tasks",
      startTracking: "Start Tracking",
    },
    {
      project: "project",
      text: "Website analysis",
      date: "24.11.2021",
      completeTask: "Complete Tasks",
      startTracking: "Start Tracking",
    },
  ];
  const series = [44, 55, 41];
  const options = {
    chart: {
      width: 400,
      type: "donut",
    },
    colors: ["#0C5496", " #012B51", "#419BCD"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label:"This Month",
              yaxis:{
                reversed:true
            }
            },
            
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },

    responsive: [
      {
        breakpoint: 1950,
        options: {
          legend: {
            show: true,
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          pie: {
            labels: {
              show: true,
            },
          },
          legend: {
            show: true,
            position: "bottom",
          },
          chart: {
            width: "100%",
            column: 1,
          },
        },
      },
    ],
  };
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className=" mt-5">
          <div className="timetracking-dashboard">
            <div className="project-parent">
              <div className="project-name">
                <h5>Project Name</h5>
                <h3>00:07:45</h3>
                <p className="task-name">Task Name</p>
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search for Task to Track.."
                    className="ps-4 pe-5"
                  />
                  <div className="searchicon">
                    <Image
                      src={"/assets/img/searchicon.png"}
                      width={"16px"}
                      height={"14px"}
                      alt="searchicon"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div
                    className="tracking"
                    data-bs-toggle="modal"
                    data-bs-target="#startTracking"
                  >
                    <Image
                      src={"/assets/img/startclock.png"}
                      width={"13px"}
                      height={"13.43px"}
                      alt="startclock"
                    />

                    <span>Start Tracking</span>
                  </div>
                  <div className="tracking">
                    <Image
                      src={"/assets/img/pauseclock.png"}
                      width={"13px"}
                      height={"13.43px"}
                      alt="pauseclock"
                    />

                    <span>Pause Tracking</span>
                  </div>
                  <div className="tracking">
                    <Image
                      src={"/assets/img/stopclock.png"}
                      width={"13px"}
                      height={"13.43px"}
                      alt="stopclock"
                    />

                    <span>Stop Tracking</span>
                  </div>
                </div>
              </div>
              <div className="project-time">
                <Donut options={options} series={series} />
              </div>
              <div className="quick-expert">
                <h5 className="mt-3">Quick Export</h5>
                <div className="search mt-5">
                  <input
                    type="text"
                    placeholder="Search for Project"
                    className="ps-3 pe-5"
                  />
                  <div className="searchicon">
                    <Image
                      src={"/assets/img/searchicon.png"}
                      width={"16px"}
                      height={"14px"}
                      alt="searchicon"
                    />
                  </div>
                </div>

                <div className="date">
                  <h5>Date</h5>
                  <div className="d-flex justify-content-between">
                    <p>Tuesday, 23.11.2021</p>
                    <p>Friday, 26.11.2021</p>
                  </div>
                </div>
                <button>Export</button>
              </div>
            </div>
            <Thisweek />
            <div className="open-task">
              <h3>Open Tasks</h3>
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead> */}
                    <tbody>
                      {tasksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.project}</td>
                          <td>{item.text}</td>
                          <td className="color-red">{item.date}</td>
                          <td>
                            {" "}
                            <Image
                              src={"/assets/img/completetask.png"}
                              width={"16px"}
                              height={"9px"}
                              alt="completetask"
                            />{" "}
                            {item.completeTask}
                          </td>
                          <td>
                            {" "}
                            <Image
                              src={"/assets/img/startclock.png"}
                              width={"13px"}
                              height={"13.43px"}
                              alt="startclock"
                            />{" "}
                            {item.startTracking}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StartTracking />
    </>
  );
};

export default timetracking;
