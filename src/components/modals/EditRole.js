import React from "react";
import img from "../../assets/img/uncheck.png";

const EditRole = () => {
  const checkData = [
    {
      module: "CRM",
      create: "crmcreate",
      read: "crmread",
      update: "crmupdate",
      delete: "crmdelete",
    },
    {
      module: "Timetracking",
      create: "timetrackingcreate",
      read: "timetrackingread",
      update: "timetrackingupdate",
      delete: "timetrackingdelete",
    },
    {
      module: "Empty",
      create: "emptycreate",
      read: "emptyread",
      update: "emptyupdate",
      delete: "emptydelete",
    },
    {
      module: "Empty",
      create: "emptycreate",
      read: "emptyread",
      update: "emptyupdate",
      delete: "emptydelete",
    },
    {
      module: "Empty",
      create: "emptycreate",
      read: "emptyread",
      update: "emptyupdate",
      delete: "emptydelete",
    },
    {
      module: "Empty",
      create: "emptycreate",
      read: "emptyread",
      update: "emptyupdate",
      delete: "emptydelete",
    },
  ];
  return (
    <>
      <div className="addnewcontact-modal">
        <div
          className="modal fade"
          id="editRole"
          tabIndex="-1"
          aria-labelledby="addnewEmployee"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header py-4">
                <h5 className="modal-title" id="addnewEmployee">
                  Edit permissions for Role “Admin”
                </h5>
              </div>
              <div className="modal-body">
                <div className="editrole-modal">
                  <h5>Permissions</h5>
                  <div className="addnewrole-table mt-4">
                    <div style={{ overflowX: "auto" }}>
                      <div className="modal-table-width">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Module</th>
                              <th scope="col">Create</th>
                              <th scope="col">Read</th>
                              <th scope="col">Update</th>
                              <th scope="col">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {checkData.map((item, ind) => {
                              return (
                                <tr key={ind}>
                                  <td>{item.module}</td>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={item.create}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={item.read}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={item.update}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={item.delete}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5 text-center">
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

export default EditRole;
