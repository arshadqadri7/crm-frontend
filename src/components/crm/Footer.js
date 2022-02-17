import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="table-footer py-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-2 ">
            <div className="d-flex justify-content-end justify-center-arrow gx-5">
              <button className="arrow-btn  me-3">
                <Image
                  src={"/assets/img/leftarrow.png"}
                  width={"7.41px"}
                  height={"12px"}
                  alt="leftarrow"
                />
              </button>
              <button className="arrow-btn">
                <Image
                  src={"/assets/img/rightarrow.png"}
                  width={"7.41px"}
                  height={"12px"}
                  alt="rightarrow"
                />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 ">
            <div className="select-page-size">
              <div className="d-flex align-items-center">
                <label>Entries per Page</label>
                <select className="form-select" aria-label="Default select example">
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">25</option>
                  <option value="20">30</option>
                  <option value="20">35</option>
                  <option value="20">40</option>
                  <option value="20">45</option>
                  <option value="20">50</option>
                </select>
              </div>
              <h6>1-3 of 3</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
