import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "../sidebars/Sidebar";

const Main = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <div className="layout">
        <div className="menu cursor-pointer" onClick={()=>setShowMenu(true)}>
          <Image
            src={"/assets/img/right-arrow.png"}
            alt={"menubar"}
            width={"20px"}
            height={"20px"}
          />
        </div>
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu}  />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Main;
