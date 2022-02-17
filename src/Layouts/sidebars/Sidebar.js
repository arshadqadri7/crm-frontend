import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = ({ showMenu, setShowMenu }) => {
  const sidebarData = [
    {
      text: "CRM",
      path: "/crm",
    },
    {
      text: "Timetracking",
      path: "/timetracking",
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
        <ul>
          <li className="logo">
            <Link href="/dashboard1">
              <a>Logo</a>
            </Link>
          </li>
          {sidebarData.map((item, index) => (
            <li key={index}>
              <Link href={`${item.path}`}>
                <a>
                  <Image
                    src={"/assets/img/Vector.png"}
                    width={"18px"}
                    height={"18px"}
                    alt="vector"
                  />
                  <span className="ms-3">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="logout" style={{marginTop:"67px"}}>
          <Image
            src={"/assets/img/logouticon.png"}
            width={"18px"}
            height={"18px"}
            alt="logouticon"
          />
          <span className="ms-3"  >Sign out</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
