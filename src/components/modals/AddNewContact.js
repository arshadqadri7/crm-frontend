import React, { useState } from "react";
import Selector from "../slector/Selector";

const AddNewContact = () => {
  const inpFields = [
    {
      name: "firstname",
      label: "First Name",
      placeholder: "First Name",
      value: "Luca",
      type: "text",
      inputType: "text",
    },
    {
      name: "lastname",
      label: "Last Name",
      placeholder: "Last Name",
      value: "Petersen",
      type: "text",
      inputType: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Email",
      value: "l.petersen@comandsons.com",
      type: "email",
      inputType: "text",
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Phone",
      value: "+49 15771866993",
      type: "text",
      inputType: "text",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "Address",
      value: "Straße 123",
      type: "text",
      inputType: "text",
    },
    {
      name: "city",
      label: "City",
      placeholder: "City",
      value: "Hamburg",
      type: "text",
      inputType: "text",
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Country",
      value: "Deutschland",
      type: "text",
      inputType: "text",
    },
    {
      name: "postal-code",
      label: "Postal Code",
      placeholder: "Postal Code",
      value: "22049",
      type: "text",
      inputType: "text",
    },
    {
      name: "company-name",
      label: "Company Name",
      placeholder: "Company Name",
      value: "CLOea fmo",
      type: "text",
      inputType: "select",
    },
    {
      name: "company-address",
      label: "Company Address",
      placeholder: "Company Address",
      value: "CLOea fmo",
      type: "text",
      inputType: "text",
    },
    {
      name: "company-postalcode",
      label: "Company Postalcode",
      placeholder: "Company Postalcode",
      value: "Michella 727",
      type: "text",
      inputType: "text",
    },
    {
      name: "company-city",
      label: "Company City",
      placeholder: "Company City",
      value: "Mérida",
      type: "text",
      inputType: "text",
    },
    {
      name: "company-country",
      label: "Company Country",
      placeholder: "Company Country",
      value: "Iceland",
      type: "text",
      inputType: "text",
    },
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
  const [data, setData] = useState(inpFields);
  const heandalChange = (e, i) => {
    let newData = [...data];
    newData[i].value = e.target.value;
    setData(newData);
  };
  return (
    <>
      <div className="addnewcontact-modal">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header py-4">
                <h5 className="modal-title" id="exampleModalLabel">
                  New Contact
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row gy-3">
                    {data.map((item, i) => {
                      return (
                        <div className="col-lg-6 col-sm-12" key={i}>
                          <label>{item.label}</label>
                          {item.inputType === "select" ? (
                            <Selector allRole={allRole} placeholder="Select company" />
                          ) : (
                            <div className="inp-field">
                              <input
                                name={item.name}
                                type={item.type}
                                value={item.value}
                                placeholder={item.placeholder}
                                onChange={(e) => heandalChange(e, i)}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="py-5">
                    <button>Save</button>
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewContact;
