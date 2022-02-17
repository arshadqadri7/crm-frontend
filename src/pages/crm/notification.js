import Image from "next/image";
import React from "react";
import Footer from "../../components/crm/Footer";
import Header from "../../components/crm/Header";
import Table from "../../components/crm/Table";

const notification = () => {
  const tableData = [
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "GROUP",
    },
    {
      notificationtitle: "Benachrichtigung Beispiel",
      notificationdate: "07.12.2021 - 14:03",
      notificationtype: "INDIVIDUAL",
    },
  ];

  const headerName = [
    { header: "Notification Title", key: "notificationtitle" },
    { header: "Notification Date", key: "notificationdate" },
    { header: "Notification Type", key: "notificationtype" },
  ];
  return (
    <>
      <div className="dashboard-scroll padding-10">
        <div className=" my-5">
          <div className="main-table">
            <Header title={"Notifications"} />
            <div className="add-new">
              <button>New Notification</button>
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

export default notification;
