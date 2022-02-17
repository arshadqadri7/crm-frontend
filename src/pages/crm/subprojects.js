import Image from "next/image";
import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";

const subprojects = () => {
  const tableData = [
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
    {
      subprojectname: "API",
      projectname: "DOCK",
      subprojectid: "bbf2-1860b1cf2e76",
    },
  ];

  const headerName = [
    { header: "Sub Project Name", key: "subprojectname" },
    { header: "Project Name", key: "projectname" },
    { header: "Sub Project Id", key: "subprojectid" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="my-5">
          <div className="main-table">
            <Header title={"Sub Projects"} />
            <div className="add-new">
              <button>New Sub Project</button>
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
    </>
  );
};

export default subprojects;
