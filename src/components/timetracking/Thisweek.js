import Image from "next/image";
import React from "react";

const Thisweek = () => {
  const tableData = [
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
    {
      project: "Project",
      date: "Dienstag, 23.11.2021",
      task: "Webseite bearbeit..",
      starttime: "09:45",
      endtime: "19:45",
    },
  ];
  return (
    <>
      <div className="thisweek">
        <div className="head d-flex justify-content-between align-items-center">
          <h3>This Week (CW43)</h3>
          <Image
            src={"/assets/img/dots.svg"}
            width={"30.52px"}
            height={"6.1px"}
            alt="dots"
          />
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
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td className="d-flex align-items-center ">
                        {" "}
                        <div className="project-logo me-3">Logo</div>{" "}
                        {item.project + (index + 1)}
                      </td>
                      <td>{item.date}</td>
                      <td>{item.task}</td>
                      <td>{item.starttime}</td>
                      <td>{item.endtime}</td>
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
    </>
  );
};

export default Thisweek;
