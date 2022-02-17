import Image from "next/image";
import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";
import AddEmployee from "../../components/modals/AddEmployee";

const employees = () => {
  const tableData = [
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
    {
      firstname: "Bennet Ritters",
      employeeemail: "b.ritters@comandsons.com	",
      userid: "00e78036-2d75e6caa428",
    },
  ];

  const headerName = [
    { header: "First Name", key: "firstname" },
    { header: "Employee Email", key: "employeeemail" },
    { header: "User Id", key: "userid" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className=" my-5">
          <div className="main-table">
            <Header title={"Employees"} />
            <div className="add-new">
              <button data-bs-toggle="modal" data-bs-target="#employee">
                New Employee
              </button>
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
      <AddEmployee />
    </>
  );
};

export default employees;
