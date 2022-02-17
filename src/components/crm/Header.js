import Image from "next/image";
import React from "react";
import PersonaliseTable from "../modals/PersonaliseTable";

const Header = ({ title }) => {
  return (
    <>
      <div className="crm-table-header">
        <div className="crm-table-header-flex mt-5">
          <div className="d-flex align-items-center justify-conten-center">
            <h3 className="me-4">{title}</h3>
            <div
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#pesonalizetable"
            >
              <Image
                src={"/assets/img/dots.svg"}
                width={"30.52px"}
                height={"6.1px"}
                alt="dots"
              />
            </div>
          </div>
          <div className="head-search">
            <input type="text" placeholder="Search for..." />
            <button>Search</button>
          </div>
        </div>
      </div>
      <PersonaliseTable />
    </>
  );
};

export default Header;
