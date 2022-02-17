import Image from "next/image";
import Link from "next/link";
import React from "react";

const Lay2 = () => {
  const modules = [
    {
      name: "Contacts",
      text:"Contacts in the System: 391",
      img:"contactdark.png",
      width:"20px",
      height:"24px"
    },
    {
      name: "Timetracking",
      text:"Employees in the System: 9",
      img:"empdark.png",
      width:"27px",
      height:"19px"
    },
    {
      name: "Settings",
      text:"Projects in the System: 3",
      img:"projectdark.png",
      width:"23px",
      height:"23px"
    },
  ];
  return (
    <>
      <div className="dashboard">
      <div  style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="modules">
          {modules.map((item, i) => (
            <div className="crm" key={i}>
              <Image src={`/assets/img/${item.img}`} width={item.width} height={item.height} alt={`${item.img}`}  />
              <Link href="/#"><a> {item.name} </a></Link>
              <p> {item.text} </p>

            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Lay2;
