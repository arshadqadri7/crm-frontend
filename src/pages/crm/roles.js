import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";
import AddNewRole from "../../components/modals/AddNewRole";



const roles = () => {
  const tableData = [
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
    {
      rolename: "Role name ",
      teamname: "IT",
      roleid: "00e78036-2d75e6caa428",
    },
  
  ];

  const headerName = [
    { header: "Role Name", key: "rolename" },
    { header: "Team Name", key: "teamname" },
    { header: "Role Id", key: "roleid" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="my-5">
          <div className="main-table">
            <Header title={"Roles"} />
            <div
              className="d-flex align-items-center"
              style={{ columnGap: "10px" }}
            >
              <div className="add-new">
                <button data-bs-toggle="modal" data-bs-target="#addnewRole">
                  New Role 
                </button>
              </div>
            </div>
            <div className="table-responsive-scroll">
              <div className="table-responsive-width">
            <Table tableData={tableData} headerName={headerName} />
            </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <AddNewRole />

      
    </>
  );
};

export default roles;
