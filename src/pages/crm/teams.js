import Image from "next/image";
import React, { useState } from "react";

const teams = () => {
  const [showProjectData, setShowProjectData] = useState(false);
  const projectData = [
    {
      project: "A&P Printservices",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
    {
      project: "Schnelltest Hamburg",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
    {
      project: "KWB",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
    {
      project: "Purestain",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
    {
      project: "Aktimed",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
    {
      project: "Com&Sons",
      addOn: "30.11.2021",
      customer: "IT Abteilung",
    },
  ];
  const teamsData = [
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
    {
      teamtext: "IT Abteilung",
      Erstelltam: "30.11.2021",
    },
  ];
  const employeeData = [
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
    {
      firstname: "Com&Sons",
      email: "IT Abteilung&Sons",
      userid: "Luca Petersen",
    },
  ];
  return (
    <>
      <div className="dashboard-scroll">
        <div className=" my-5">
          <div className="teams-main">
            {!showProjectData && (
              <>
                <div className="row gy-5">
                  <div className="col-lg-9">
                    <div className="teams">
                      <h5>IT - Projects</h5>
                      <div className="teams-scroll">
                        <div className="teams-scroll-width">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Project</th>
                                <th scope="col">Added on</th>
                                <th scope="col">Customer</th>
                              </tr>
                            </thead>
                            <tbody>
                              {projectData.map((item, i) => (
                                <tr
                                  key={i}
                                  onClick={() => setShowProjectData(true)}
                                >
                                  <td>{item.project}</td>
                                  <td>{item.addOn}</td>
                                  <td>
                                    {" "}
                                    <div className="team">
                                      <span className="team-text">
                                        {item.customer}
                                      </span>
                                      <Image
                                        src={"/assets/img/delete.png"}
                                        width={"13px"}
                                        height={"13px"}
                                        alt="delete"
                                      />{" "}
                                    </div>{" "}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="new-teams">
                      <h1>Add Project</h1>
                      <div className="text-center">
                        <input type={"text"} placeholder="Search for Project" />
                        <button className="disable-button">Add Project</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gy-5 mt-3">
                  <div className="col-lg-9">
                    <div className="teams">
                      <h5>IT - Employees</h5>
                      <div className="teams-scroll">
                        <div className="teams-scroll-width">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">User Id</th>
                              </tr>
                            </thead>
                            <tbody>
                              {employeeData.map((item, i) => (
                                <tr key={i}>
                                  <td>{item.firstname}</td>
                                  <td>{item.email}</td>
                                  <td>
                                    {" "}
                                    <div className="team">
                                      <span className="team-text">
                                        {item.userid}
                                      </span>
                                      <Image
                                        src={"/assets/img/delete.png"}
                                        width={"13px"}
                                        height={"13px"}
                                        alt="delete"
                                      />{" "}
                                    </div>{" "}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="new-teams">
                      <h1>Add Employee</h1>
                      <div className="text-center">
                        <input
                          type={"text"}
                          placeholder="Search for Employee"
                        />
                        <button className="disable-button">Add Employee</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {showProjectData && (
              <div className="row gy-5 ">
                <div className="col-lg-9">
                  <div className="teams">
                    <h5>Teams</h5>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Team</th>
                          <th scope="col">Added on</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamsData.map((item, i) => (
                          <tr key={i} onClick={() => setShowProjectData(true)}>
                            <td>
                              {" "}
                              <div className="team">
                                <span className="team-text">
                                  {item.teamtext}
                                </span>
                                <Image
                                  src={"/assets/img/delete.png"}
                                  width={"13px"}
                                  height={"13px"}
                                  alt="delete"
                                />{" "}
                              </div>{" "}
                            </td>
                            <td>{item.Erstelltam}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="new-teams">
                    <h1>New Team</h1>
                    <div className="text-center">
                      <input type={"text"} placeholder="Enter Team Name" />
                      <button className="disable-button">Create Team</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default teams;
