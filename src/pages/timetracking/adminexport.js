import Image from "next/image";
import React, { useState } from "react";

const Adminexport = () => {
  const [showSugg, setShowSugg] = useState(true);
  const tasksData = [
    {
      startdate: "Tuesday, 23.11.2021",
      enddate: "Friday, 26.11.2021",
      excel: "Excel",
      csv: "chv",
      yes: "Yes",
      no: "No",
    },
  ];
  const suggestion = [
    {
      text: "Beispiel Firma 1",
      img: "done.png",
    },
    {
      text: "Beispiel Firma 1",
      img: "uncheck.png",
    },
    {
      text: "Beispiel Firma 1",
      img: "uncheck.png",
    },
  ];

  return (
    <div className="dashboard-scroll">
      <div className="timetracking-dashboard">
        <div className="admin-export margin-top-50">
          <div className="open-task">
            <div className="d-flex  align-items-center justify-content-between">
              <h3 className="mb-0">Export</h3>
            </div>
            <div className="overflow-x-scroll">
              <div className="overflow-x-scroll-width">
                <table className="table mt-3">
                  <thead>
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
                          {item.excel} <span className="ms-3">{item.csv}</span>
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
          <div className="export-filter">
            <h3 className="mb-0">Export Filter</h3>
            <div className="row justify-content-between mt-5">
              <div className="col-lg-5 col-sm-12">
                <div>
                  <label>Project</label>
                  <div className="inp-field">
                    <input type="text" placeholder="Search for project" />
                    <div className="search-img">
                      <Image
                        src={"/assets/img/Search.png"}
                        width={"15px"}
                        height={"15px"}
                        alt="Search"
                      />
                    </div>
                    {showSugg && (
                      <div className="suggestion">
                        {suggestion.map((item, ind) => {
                          return (
                            <div className="suggested" key={ind}>
                              <p>{item.text} </p>
                              <Image
                                src={`/assets/img/${item.img}`}
                                width={"11px"}
                                height={"11px"}
                                alt={`${item.img}${ind}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="date margin-top-50">
                  <h3>Date</h3>
                  <div className="dates">
                    <span>Tuesday, 23.11.2021</span>
                    <span>Friday, 26.11.2021</span>
                  </div>
                </div>
                <div className="file-types">
                  <h3>File Type</h3>
                  <div className="type">
                    <span>Excel</span>
                    <span>CSV</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12">
                <div>
                  <label>Task</label>
                  <div className="inp-field">
                    <input type="text" placeholder="Search for Task" />
                    <div className="search-img">
                      <Image
                        src={"/assets/img/Search.png"}
                        width={"15px"}
                        height={"15px"}
                        alt={"Search"}
                      />
                    </div>
                    {/* {showSugg && (
                    <div className="suggestion">
                      {suggestion.map((item) => {
                        return (
                          <div className="suggested">
                            <p>{item.text} </p>
                            <Image
                              src={`/assets/img/${item.img}`}
                              width={"11px"}
                              height={"11px"}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
                  </div>
                </div>
                <div className="mt-5">
                  <label>Employee</label>
                  <div className="inp-field">
                    <input type="text" placeholder="Search for Employee" />
                    <div className="search-img">
                      <Image
                        src={"/assets/img/Search.png"}
                        width={"15px"}
                        height={"15px"}
                        alt={"Search"}
                      />
                    </div>
                    {/* {showSugg && (
                    <div className="suggestion">
                      {suggestion.map((item) => {
                        return (
                          <div className="suggested">
                            <p>{item.text} </p>
                            <Image
                              src={`/assets/img/${item.img}`}
                              width={"11px"}
                              height={"11px"}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
                  </div>
                </div>
                <div className="file-types">
                  <h3>Generate Invoice (Pro Version)</h3>
                  <div className="type">
                    <span>Yes</span>
                    <span>No</span>
                  </div>
                </div>
                <div className="filterbtn mt-5">
                  <button>Apply Filter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminexport;
