import Image from "next/image";
import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";
import AddNewContact from "../../components/modals/AddNewContact";

const contacts = () => {
  const tableData = [
    {
      firstname: "John ",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 1",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
    {
      firstname: "John 2",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      mobile: 1234567890,
      phone: 3214567891,
      address: "San Francisco, US",
      city: "San Francisco",
      postalcode: "00001 – 99950",
      country: "United States (US)",
    },
  ];

  const headerName = [
    { header: "First Name", key: "firstname" },
    { header: "Last Name", key: "lastname" },
    { header: "Email", key: "email" },
    { header: "Mobile", key: "mobile" },
    { header: "Phone", key: "phone" },
    { header: "Address", key: "address" },
    { header: "City", key: "city" },
    { header: "Postal Code", key: "postalcode" },
    { header: "Country", key: "country" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className="my-5">
          <div className="main-table">
            <Header title={"Contacts"} />
            <div
              className="d-flex align-items-center flex-wrap"
              style={{ columnGap: "10px" }}
            >
              <div className="add-new">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  New Contact
                </button>
              </div>
              <div className="add-new">
                <button>Export All</button>
              </div>
              <div className="add-new" style={{ opacity: 0.3 }}>
                <button>Remove contact</button>
              </div>
            </div>
            <div style={{ overflowX: "scroll" }}>
              <div style={{ width: "1571px" }}>
                <Table tableData={tableData} headerName={headerName} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <AddNewContact />
    </>
  );
};

export default contacts;
