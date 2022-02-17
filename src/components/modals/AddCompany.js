import Image from "next/image";
import React from "react";
import Selector from "../slector/Selector";

const AddCompany = () => {
  const allRole = [
    {
      role: "Admin",
    },
    {
      role: "Employee",
    },
    {
      role: "HR",
    },
  ];
  return (
    <>
      <div className="addnewcontact-modal">
        <div
          className="modal fade"
          id="addCompnay"
          tabIndex="-1"
          aria-labelledby="addCompnay"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header py-4">
                <h5 className="modal-title">New company</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 ">
                    <label>Company email</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"l.petersen@comandsons.com"}
                        placeholder="Companye"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Invoice email</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"invoice@comandsons.com"}
                        placeholder="Invoice email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Country</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"Deutschland"}
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Postal Code</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"22049"}
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <label>Company Name</label>
                    <Selector allRole={allRole} placeholder="Select company" />
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <label>Company Address</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"Michella 727"}
                        placeholder="Company Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Company City</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"Mérida"}
                        placeholder="Company City"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <button className="editrole-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompany;
