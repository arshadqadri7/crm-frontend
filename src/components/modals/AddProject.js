import Image from "next/image";
import React from "react";

const AddProject = () => {
  return (
    <>
      <div className="addnewcontact-modal">
        <div
          className="modal fade"
          id="addProject"
          tabIndex="-1"
          aria-labelledby="addProject"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header py-4">
                <h5 className="modal-title" id="addnewEmployee">
                  Add project
                </h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 ">
                    <label>Project Name</label>
                    <div className="inp-field">
                      <input
                        name="projectname"
                        type="text"
                        value={"Project Name"}
                        placeholder="Project Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Team</label>
                    <div className="inp-field">
                      <input
                        name="team"
                        type="text"
                        value={"IT"}
                        placeholder="Team"
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <label>Add Employee</label>
                    <div className="inp-field">
                      <input
                        name="addemployee"
                        type="text"
                        value={"l.petersen@comandsons.com"}
                        placeholder="Add Employee"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-5 text-center">
                  <Image
                    src={"/assets/img/add task.svg"}
                    width={"21px"}
                    height={"20px"}
                    alt="addtask"
                    className="cusorPointer"
                  />
                  <br/>
                  <button className="editrole-btn px-4 mt-3" >Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
