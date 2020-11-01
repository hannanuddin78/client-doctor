import React from "react";
import img from "../../../images/doctor-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 col-sm-6 text-center">
      <div>
        <img style={{ height: "200px" }} src={`data:image/png;base64,${doctor.image.img}`} />
        <h4>{doctor.name}</h4>
        <p>
          <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.phone}
        </p>
      </div>
    </div>
  );
};

export default Doctor;
