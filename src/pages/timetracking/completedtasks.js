import React from "react";
import Image from "next/image";
import Donut from "../../components/graphs/Donut";

const completedtasks = () => {
  const PriorityTasks = [
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
    {
      task: "Webseite bearbeiten",
      date: "24.11.2021",
    },
  ];

  const tasksData = [
    {
      startdate: "Tuesday, 23.11.2021",
      enddate: "Friday, 26.11.2021",
      excel: "Excel",
      csv: "chv",
      yes: "yes",
      no: "no",
    },
  ];

  const prioritytasksData = [
    {
      project: "Projekt 1",
      text: "Webseiten Analyse",
      startTracking: "Aktimed GmbH",
      date: "24.11.2021",
      completeTask: "Complete Task",
    },
    {
      project: "Projekt 2",
      text: "Webseiten Analyse",
      completeTask: "Complete Task",
      date: "24.11.2021",
      startTracking: "Aktimed GmbH",
    },
    {
      project: "Projekt 2",
      text: "Webseiten Analyse",
      completeTask: "Complete Task",
      date: "24.11.2021",
      startTracking: "Aktimed GmbH",
    },
    {
      project: "Projekt 2",
      text: "Webseiten Analyse",
      completeTask: "Complete Task",
      date: "24.11.2021",
      startTracking: "Aktimed GmbH",
    },
    {
      project: "Projekt 2",
      text: "Webseiten Analyse",
      completeTask: "Complete Task",
      date: "24.11.2021",
      startTracking: "Aktimed GmbH",
    },
    {
      project: "Projekt 2",
      text: "Webseiten Analyse",
      completeTask: "Complete Task",
      date: "24.11.2021",
      startTracking: "Aktimed GmbH",
    },
  ];
  const series = [44, 55, 41];
  const options = {
    chart: {
      width: 200,
      maxWidth: 200,
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
              label: "This Month",
              yaxis: {
                reversed: true,
              },
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
            position: "right",
          },
          chart: {
            width: 450,
          },
        },
      },
      {
        breakpoint: 991,
        options: {
          legend: {
            show: true,
            position: "right",
          },
          chart: {
            width: 450,
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
            width: 300,
            column: 1,
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="mt-5">
          <div className="timetracking-dashboard">
            <div className="prioritytask-project-parent">
              <div className="project-name">
                <h5>Latest Completed Tasks</h5>
                {PriorityTasks.map((item, i) => (
                  <div className="priority-tasks" key={i}>
                    <p className="task">{item.task}</p>
                    <p className="date font-color-012B51">{item.date}</p>
                  </div>
                ))}
              </div>
              <div className="project-name">
                <h5>Overview</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <Donut options={options} series={series} />
                </div>
              </div>
            </div>
            <div className="open-task">
              <div className="d-flex  align-items-center justify-content-between">
                <h3 className="mb-0">Completed Tasks</h3>
                <Image
                  src="/assets/img/dots.svg"
                  alt=""
                  width="30px"
                  height="6px"
                />
              </div>
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    <tbody>
                      {prioritytasksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.project}</td>
                          <td>{item.text}</td>
                          <td> {item.startTracking}</td>
                          <td className="font-14 font-family-montserrat font-weight-normal font-color-012B51">
                            {item.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="open-task">
              <div className="d-flex  align-items-center justify-content-between">
                <h3 className="mb-0">Export</h3>
              </div>
              <div className="position-relative mb-3">
                <input
                  placeholder="Search for Project"
                  className="button-419BCD w-100p br-100 br-100 br-100 text-left font-color-FFFFFF p-2 font-weight-normal font-11 font-family-Inter mt-3 search-input"
                />
                <div className="set-search-icon">
                  <Image
                    src="/assets/img/Search.png"
                    alt="A"
                    width="13px"
                    height="13px"
                  />
                </div>
              </div>
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    <thead className="mt-3">
                      <th
                        className="font-weight-500 font-15 font-family-montserrat"
                        colSpan="2"
                      >
                        Date
                      </th>
                      <th className="font-weight-500 font-15 font-family-montserrat">
                        File Type
                      </th>
                      <th className="font-weight-500 font-15 font-family-montserrat">
                        Generate Invoice (Pro Version)
                      </th>
                    </thead>
                    <tbody>
                      {tasksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.startdate}</td>
                          <td>{item.enddate}</td>
                          <td>
                            
                            {item.excel}
                            <span className="ms-3">{item.csv}</span>
                          </td>
                          <td className="">
                            {item.yes} <span className="ms-4">{item.no}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button className="font-color-012B51 font-11 font-family-montserrat br-100 export-button">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default completedtasks;
