import Image from "next/image";
import React from "react";
import EditRole from "../modals/EditRole";

const Table = ({ tableData, headerName }) => {
  return (
    <>
      <div className="main-table-inner">
        <table className="table">
          <thead>
            <tr>
              <th  scope="col">
                <div
                  className="d-flex align-items-center justify-content-start"
                  style={{ columnGap: "15px" }}
                >
                  <Image
                    src={"/assets/img/refresh.svg"}
                    width={"11px"}
                    height={"15px"}
                    alt="refresh"
                  />

                  <Image
                    src={"/assets/img/add.svg"}
                    width={"15.25px"}
                    height={"15.25px"}
                    alt="add"
                  />

                  <Image
                    src={"/assets/img/revert.svg"}
                    width={"15.25px"}
                    height={"15.25px"}
                    alt="revert"
                  />

                  <span>Selected: 0</span>
                </div>
              </th>
              {headerName.map((item, i) => {
                return (
                  <th scope="col" key={i}>
                    <div className="d-flex  align-items-center">
                      <span className="me-3">{item.header}</span>
                      <Image
                        src={"/assets/img/downarrow.svg"}
                        width={"9px"}
                        height={"5.56px"}
                        alt="downarrow"
                        
                        
                      />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td  data-bs-toggle="modal" data-bs-target="#editRole">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`notification${index}`}
                    />
                  </div>
                </td>
                {Object.keys(item).map((td, i) => (
                  <td key={i} >{item[td]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditRole/>
    </>
  );
};

export default Table;
