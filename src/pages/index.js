import Link from "next/link";
import React from "react";

const main = () => {
  const modules = [
    {
      name: "CRM",
      btn: "Open Module",
      path:"/crm"
    },
    {
      name: "Timetracking",
      btn: "Open Module",
      path:"/timetracking"
    },
    {
      name: "Settings",
      btn: "Open Module",
      path:"/setting"
    },
  ];
  return (
    <>
      <div className="dashboard">
        <div  style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="modules">
          {modules.map((item, i) => (
            <div className="module" key={i}>
              <p> {item.name} </p>
              <Link passHref={true} href={`${item.path}`}>
                <button> {item.btn} </button>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default main;
