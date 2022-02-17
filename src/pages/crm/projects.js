import Image from "next/image";
import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";
import AddProject from "../../components/modals/AddProject";

const projects = () => {
  const tableData = [
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
    {
      projectname: "b.ritters@comandsons.com	",
      projectid: "b6985b6b-70a4-4a9c-bbf2-1860b1cf2e76",
    },
  ];

  const headerName = [
    { header: "Project Name", key: "projectname" },
    { header: "Project Id", key: "projectid" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="my-5">
          <div className="main-table">
            <Header title={"Projects"} />
            <div className="add-new">
              <button data-bs-toggle="modal" data-bs-target="#addProject">New Project</button>
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
      <AddProject/>
    </>
  );
};

export default projects;
