import Image from "next/image";
import React from "react";
import Donut from "../../components/graphs/Donut";

const prioritytasks = () => {
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
        <div className=" mt-5">
          <div className="timetracking-dashboard">
            <div className="prioritytask-project-parent">
              <div className="project-name">
                <h5>Overdue Priority Tasks</h5>
                {PriorityTasks.map((item, i) => (
                  <div className="priority-tasks" key={i}>
                    <p className="task">{item.task}</p>
                    <p className="date">{item.date}</p>
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
              <h3>Priority Tasks - Due this Week</h3>
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    <tbody>
                      {tasksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.project}</td>
                          <td>{item.text}</td>
                          <td> {item.startTracking}</td>
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="open-task">
              <h3>Priority Tasks</h3>
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    <tbody>
                      {prioritytasksData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.project}</td>
                          <td>{item.text}</td>
                          <td> {item.startTracking}</td>
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="/assets/img/add task.png"
                  alt=""
                  width={"12px"}
                  height={"12px"}
                />
                <p className="font-family-montserrat font-14 font-weight-normal font-dark ms-2 mb-0">
                  New Priority Task
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default prioritytasks;
