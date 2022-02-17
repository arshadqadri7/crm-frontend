import React, { useState } from "react";

const PersonaliseTable = () => {
  return (
    <>
      <div className="personaliseTable-modal">
        <div
          className="modal fade"
          id="pesonalizetable"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body">
                <h5>Tabelle personalisieren</h5>
                <div className="row mt-4">
                  <div className="col-6">
                    <p>Verwendete Kategorien</p>
                    <div className="personaliseTable-data">
                      <ul>
                        <li>Tabellen Name</li>
                        <li>Tabellen Name</li>
                        <li>Tabellen Name</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <p>Unverwendete Kategorien</p>
                    <div className="personaliseTable-data">
                      <ul>
                        <li>Tabellen Name</li>
                        <li>Tabellen Name</li>
                        <li>Tabellen Name</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonaliseTable;
