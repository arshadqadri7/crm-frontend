import React from "react";
import RadialBar from "../graphs/RadialBar";

const StartTracking = () => {
  return (
    <div className="startTracking-modal">
      <div
        className="modal fade"
        id="startTracking"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Still working on this Task?
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-5 col-md-5 d-flex justify-content-center align-items-center flex-column pe-0">
                  <div className="texts mt-3">
                    <h5>Project:</h5>
                    <p> Aktimed - Website</p>
                  </div>
                  <div className="texts mt-5">
                    <h5>Project:</h5>
                    <p> Aktimed - Website</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 d-flex justify-content-center align-items-center">
                    <RadialBar />
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="tracking-btns">
                        <button>Keep Tracking</button>
                        <button>Complete Task</button>
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTracking;
