import Image from "next/image";
import React, { useState } from "react";

const AdminFilter = ({setShowFilter}) => {
  const [showSugg, setShowSugg] = useState(true);
  const suggestion = [
    {
      text: "Beispiel Firma 1",
      img: "done.png",
    },
    {
      text: "Beispiel Firma 1",
      img: "uncheck.png",
    },
    {
      text: "Beispiel Firma 1",
      img: "uncheck.png",
    },
  ];
  return (
    <div className="admin-export">
      <div className="export-filter position-relative">
          <div className="close-filter cursor-pointer" onClick={()=>setShowFilter(false)}>
              <Image src={"/assets/img/close.png"} width={"12px"} height={"12px"} alt={"close"} />
          </div>
        <h3 className="mb-0">Export Filter</h3>
        <div className="row justify-content-between mt-5">
          <div className="col-lg-5 col-sm-12">
            <div>
              <label>Project</label>
              <div className="inp-field  z-ind">
                <input type="text" placeholder="Search for project" />
                <div className="search-img">
                  <Image
                    src={"/assets/img/Search.png"}
                    width={"15px"}
                    height={"15px"}
                    alt={"Search"}
                  />
                </div>
                {showSugg && (
                  <div className="suggestion">
                    {suggestion.map((item, ind) => {
                      return (
                        <div className="suggested" key={ind}>
                          <p>{item.text} </p>
                          <Image
                            src={`/assets/img/${item.img}`}
                            width={"11px"}
                            height={"11px"}
                            alt={`${item.img}${ind}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div>
              <label>Task</label>
              <div className="inp-field margin-top">
                <input type="text" placeholder="Search for Task" />
                <div className="search-img">
                  <Image
                    src={"/assets/img/Search.png"}
                    width={"15px"}
                    height={"15px"}
                    alt={"Search"}
                  />
                </div>
                {/* {showSugg && (
                    <div className="suggestion">
                      {suggestion.map((item) => {
                        return (
                          <div className="suggested">
                            <p>{item.text} </p>
                            <Image
                              src={`/assets/img/${item.img}`}
                              width={"11px"}
                              height={"11px"}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
              </div>
            </div>
            <div className="mt-5">
              <label>Employee</label>
              <div className="inp-field">
                <input type="text" placeholder="Search for Employee" />
                <div className="search-img">
                  <Image
                    src={"/assets/img/Search.png"}
                    width={"15px"}
                    height={"15px"}
                    alt={"Search"}
                  />
                </div>
                {/* {showSugg && (
                    <div className="suggestion">
                      {suggestion.map((item) => {
                        return (
                          <div className="suggested">
                            <p>{item.text} </p>
                            <Image
                              src={`/assets/img/${item.img}`}
                              width={"11px"}
                              height={"11px"}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )} */}
              </div>
            </div>
            <div className="date mt-4">
              <h3>Date</h3>
              <div className="dates">
                <span>Tuesday, 23.11.2021</span>
                <span>Friday, 26.11.2021</span>
              </div>
            </div>
            <div className="filterbtn mt-3">
              <button>Apply Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFilter;
