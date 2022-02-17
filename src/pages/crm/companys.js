import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";
import AddCompany from "../../components/modals/AddCompany";
import AddNewContact from "../../components/modals/AddNewContact";

const companys = () => {
  const tableData = [
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
    {
      companyname: "Bennet Ritters ",
      companyemail: "b.ritters@comandsons.com	",
      companyid: "00e78036-2d75e6caa428",
    },
  ];

  const headerName = [
    { header: "Company Name", key: "companyname" },
    { header: "Company Email", key: "companyemail" },
    { header: "Company Id", key: "companyid" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="my-5">
          <div className="main-table">
            <Header title={"Companies"} />
            <div
              className="d-flex align-items-center"
              style={{ columnGap: "10px" }}
            >
              <div className="add-new">
                <button data-bs-toggle="modal" data-bs-target="#addCompnay">
                  New Company
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
      <AddCompany />
    </>
  );
};

export default companys;
