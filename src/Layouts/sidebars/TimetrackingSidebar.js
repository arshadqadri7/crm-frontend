import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Timetracking = ({ showMenu, setShowMenu }) => {
  const router = useRouter();
  const sidebarData = [
    {
      text: "Dashboard",
      path: "/timetracking",
      img: "Vector.png",
      width:"18px",
      height:"18px"
    },
    {
      text: "Priority Tasks",
      path: "/timetracking/prioritytasks",
      img: "priority.png",
      width:"20px",
      height:"20px"
    },
    {
      text: "Tasks",
      path: "/timetracking/tasks",
      img: "tasks.png",
      width:"20px",
      height:"20px"
    },
    {
      text: "Completed Tasks",
      path: "/timetracking/completedtasks",
      img: "complete.png",
      width:"20px",
      height:"20px"
    },
    {
      text: "Export",
      path: "/timetracking/adminexport",
      img: "export.png",
      width:"24px",
      height:"16px"
    },
    {
      text: "Admin ",
      path: "/timetracking/admin",
      img: "admin.png",
      width:"18px",
      height:"18px"
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
            <Link href={"/"}><a><button className="back-btn">
            <Image  
              src={"/assets/img/backicon.png"}
              width={"8px"}
              height={"12px"}
              alt="backicon"
            />
            <span className="ms-3">To the main menu</span>
          </button></a></Link>
          
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

export default Timetracking;
