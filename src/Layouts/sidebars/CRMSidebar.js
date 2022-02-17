import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CRMSidebar = ({ showMenu, setShowMenu }) => {
  const router = useRouter();
  const sidebarData = [
    {
      text: "Dashboard",
      path: "/crm",
      img: "Vector.svg",
      width: "18px",
      height: "18px",
    },
    {
      text: "Notifications",
      path: "/crm/notification",
      img: "notification.png",
      width: "16px",
      height: "19.5px",
    },
    {
      text: "My Profile",
      path: "/crm/myprofile",
      img: "myprofile.png",
      width: "18px",
      height: "18px",
    },
    {
      text: "Contacts",
      path: "/crm/contacts",
      img: "contact.png",
      width: "20px",
      height: "24px",
    },
    {
      text: "Employees",
      path: "/crm/employees",
      img: "employee.png",
      width: "18px",
      height: "19px",
    },
    {
      text: "Projects",
      path: "/crm/projects",
      img: "myprofile.png",
      width: "18px",
      height: "18px",
    },
    {
      text: "Sub Project",
      path: "/crm/subprojects",
      img: "myprofile.png",
      width: "18px",
      height: "18px",
    },
    {
      text: "Teams",
      path: "/crm/teams",
      img: "team.png",
      width: "20px",
      height: "14px",
    },
    {
      text: "Companies",
      path: "/crm/companys",
      img: "Companys.png",
      width: "20px",
      height: "18px",
    },
    {
      text: "Roles",
      path: "/crm/roles",
      img: "role.png",
      width: "18.67px",
      height: "19.2px",
    },
  ];
  return (
    <>
      <div className="sidebar" style={{ left: showMenu ? "0" : "-230px" }}>
        {showMenu && (
          <div
            className="menu-sidebar cursor-pointer"
            onClick={() => setShowMenu(false)}
          >
            <Image
              src={"/assets/img/left-arrow.png"}
              alt={"menubar"}
              width={"20px"}
              height={"20px"}
            />
          </div>
        )}
        <div className="back-btn-div">
          <Link href={"/"}>
            <a>
              <button className="back-btn">
                <Image
                  src={"/assets/img/backicon.png"}
                  width={"8px"}
                  height={"12px"}
                  alt="backicon"
                />
                <span className="ms-3">To the main menu</span>
              </button>
            </a>
          </Link>
        </div>

        <ul>
          {sidebarData.map((item, index) => (
            <li key={index}>
              <Link href={`${item.path}`}>
                <a style={{color:router.pathname=== item.path && "#419BCD"}}>
                  <Image
                    src={`/assets/img/${item.img}`}
                    width={item.width}
                    height={item.height}
                    alt={`${item.img}`}
                    color={"red"}
                  />
                  <span className="ms-3">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="logout">
          <Image
            src={"/assets/img/logouticon.png"}
            width={"18px"}
            height={"18px"}
            alt="logouticon"
          />
          <span className="ms-3">Sign out</span>
        </button>
      </div>
    </>
  );
};

export default CRMSidebar;
