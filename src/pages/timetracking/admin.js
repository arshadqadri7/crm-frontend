import Image from "next/image";
import React, { useState } from "react";
import ColumnChart from "../../components/graphs/ColumnChart";
import AdminFilter from "../../components/timetracking/AdminFilter";

const Admin = () => {
  const [showFilter, setShowFilter] = useState(false);
  const completedTask = [
    {
      name: "Luca Petersen",
      projectName: "Frontend Developer",
      task: "37 Tasks",
      duration: "In this Week",
    },
    {
      name: "Luca Petersen",
      projectName: "Frontend Developer",
      task: "37 Tasks",
      duration: "In this Week",
    },
    {
      name: "Luca Petersen",
      projectName: "Frontend Developer",
      task: "37 Tasks",
      duration: "In this Week",
    },
    {
      name: "Luca Petersen",
      projectName: "Frontend Developer",
      task: "37 Tasks",
      duration: "In this Week",
    },
  ];
  const tableData = [
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
    {
      project: "KWB - Projekt 1",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      employee: "Luca Petersen",
      trackingStart: "19:45",
    },
  ];
  return (
    <div className="dashboard-scroll ">
      <div className="admin  mx-auto">
        <div className=" my-5 row gy-2 width-100 margin-0">
          <div className="col-lg-6 col-md-6">
            <div className="admin-week-overview">
              <h5>Week Overview</h5>
              <ColumnChart />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="admin-completed-task">
              <h5>Completed Tasks</h5>
              <span className="total-completed-task">233 completed Tasks</span>
              <div className="completed-tasks">
                {completedTask.map((item, ind) => {
                  return (
                    <div className="row mt-3" key={ind}>
                      <div className="col-8">
                        <div className="name">
                          <h3>{item.name}</h3>
                          <p>{item.projectName}</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="completed-task">
                          <div className="d-flex align-items-center">
                            <Image
                              src={"/assets/img/doublecheck.png"}
                              alt="doublecheck"
                              width={"18px"}
                              height={"10px"}
                              className="cursor-pointer"
                            />
                            <h6 className="ms-2">{item.task}</h6>
                          </div>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-2">
                <button>Show more</button>
              </div>
            </div>
          </div>
        </div>

        {!showFilter ? (
          <div className="thisweek">
            <div className="head d-flex justify-content-between align-items-center">
              <h3>Currently being Tracked</h3>
              <div
                className="cursor-pointer"
                onClick={() => setShowFilter(true)}
              >
                <Image
                  src={"/assets/img/dots.svg"}
                  width={"30.52px"}
                  height={"6.1px"}
                  alt="dots"
                />
              </div>
            </div>
            <div className="thisweek-table">
              <div className="overflow-x-scroll">
                <div className="overflow-x-scroll-width">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Date</th>
                        <th scope="col">Task</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Tracking Start</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.project + (index + 1)}</td>
                          <td>{item.date}</td>
                          <td>{item.task}</td>
                          <td>{item.employee}</td>
                          <td>{item.trackingStart}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center">
                <button>Show more</button>
              </div>
            </div>
          </div>
        ) : (
          <AdminFilter setShowFilter={setShowFilter} />
        )}
      </div>
    </div>
  );
};

export default Admin;
