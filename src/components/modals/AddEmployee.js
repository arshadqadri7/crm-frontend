import React, { useState } from "react";
import Selector from "../slector/Selector";

const AddEmployee = () => {
  const inpFields = [
    {
      name: "firstname",
      label: "First Name",
      placeholder: "First Name",
      value: "Luca",
      type: "text",
    },
    {
      name: "lastname",
      label: "Last Name",
      placeholder: "Last Name",
      value: "Petersen",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Email",
      value: "l.petersen@comandsons.com",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Phone",
      value: "+49 15771866993",
      type: "text",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Address",
      value: "Straße 123",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      placeholder: "City",
      value: "Hamburg",
      type: "text",
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Country",
      value: "Deutschland",
      type: "text",
    },
    {
      name: "postcode",
      label: "Postcode",
      placeholder: "Postcode",
      value: "22049",
      type: "text",
    },
  ];
  const [data, setData] = useState(inpFields);
  const heandalChange = (e, i) => {
    let newData = [...data];
    newData[i].value = e.target.value;
    setData(newData);
  };
  const colourOptions = [
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
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
          id="employee"
          tabIndex="-1"
          aria-labelledby="addnewEmployee"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header py-4">
                <h5 className="modal-title" id="addEmployee">
                  Add Employees
                </h5>
              </div>
              <div className="modal-body">
                
                <form>
                  <div className="row gy-3">
                    {data.map((item, i) => {
                      return (
                        <div className="col-lg-6 col-sm-12" key={i}>
                          <label>{item.label}</label>
                          <div className="inp-field">
                            <input
                              name={item.name}
                              type={item.type}
                              value={item.value}
                              placeholder={item.placeholder}
                              onChange={(e) => heandalChange(e, i)}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="col-lg-6 col-sm-12">
                      {/* <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={colourOptions[0]}
                        // isDisabled={isDisabled}
                        // isLoading={isLoading}
                        // isClearable={false}
                        // isRtl={isRtl}
                        isSearchable={true}
                        name="color"
                        options={colourOptions}
                      /> */}
                      <label>Add role</label>
                      <Selector allRole={allRole} placeholder="Select role" />
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5">
                      <button className="edit-btn">Edit permissions</button>
                    </div>
                  </div>
                  <div className="py-5">
                    <button>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AddEmployee;
