import Image from "next/image";
import React from "react";

const myprofile = () => {
  return (
    <>
      <div className="dashboard-scroll">
        <div className="d-flex justify-content-center align-items-center">
          <div className="crm-myprofile">
            <div className="crm-myprofile-header">
              <div className="profile">
                <Image
                  src={"/assets/img/Bitmap.png"}
                  width={"108.24px"}
                  height={"109px"}
                  alt="Bitmap"
                />
                <div className="edit-profile">
                  <Image
                    src={"/assets/img/editicon.png"}
                    width={"12px"}
                    height={"12px"}
                    alt="editicon"
                  />
                </div>
              </div>
              <div className="text">
                <h3>Luca Petersen</h3>
                <p>
                  User ID: <span>51b14669-a3b2-4dbc-9df9-7cc1885e18c0</span>
                </p>
              </div>
            </div>
            <div className="myprofile-detail-area">
              <form>
                <div className="row gy-3">
                  <div className="col-lg-6 col-sm-12">
                    <label>First Name</label>
                    <div className="inp-field">
                      <input
                        type={"text"}
                        value={"Luca"}
                        placeholder="First name"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Last Name</label>
                    <div className="inp-field">
                      <input
                        type={"text"}
                        value={"Petersen"}
                        placeholder="Last name"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Email</label>
                    <div className="inp-field">
                      <input
                        type={"email"}
                        value={"l.petersen@comandsons.com"}
                        placeholder="Email"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label>Phone Number</label>
                    <div className="inp-field">
                      <input
                        type={"text"}
                        value={"+49 15771866993"}
                        placeholder="Phone number"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default myprofile;
