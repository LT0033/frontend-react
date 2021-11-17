import React, { useState } from "react";
import cn from "classnames";

const FounderCard = ({
  founderTitle,
  founderOrigin,
  founderPosition,
  founderSpecs,
  founderCrimes,
  founderImg,
}) => {
  let [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="card bg-transparent">
        <img className="card-img-top" src={`/img/founders/${founderImg}`} />
        <div className="card-body text-left px-0">
          <h2 className="card-title font-poppins">{founderTitle}</h2>
          <div className="row">
            <div className="col-12">
              <p className="font-poppins text-white lead font-weight-bold">
                Origin:{" "}
                <span className="font-roboto-mono font-weight-light">
                  {founderOrigin}
                </span>
              </p>
            </div>
            <div className="col-12 my-3">
              <p className="font-poppins text-white lead font-weight-bold">
                Position:{" "}
                <span className="font-roboto-mono font-weight-light">
                  {founderPosition}
                </span>
              </p>
            </div>
            <div
              className={cn("p-0", {
                "d-block": showInfo,
                "d-none": !showInfo,
              })}
            >
              <div className="col-12 mb-3">
                <p className="font-poppins text-white lead font-weight-bold">
                  Specialities:{" "}
                  <span className="font-roboto-mono font-weight-light">
                    {founderSpecs}
                  </span>
                </p>
              </div>
              <div className="col-12 row">
                <div className="font-poppins text-white lead font-weight-bold">
                  Crimes:{" "}
                  <span className="font-roboto-mono font-weight-light">
                    {founderCrimes}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={cn("col-12", {
                "mt-3": showInfo,
                "mt-0": !showInfo,
              })}
            >
              <button
                onClick={() => setShowInfo((showInfo = !showInfo))}
                className="font-poppins font-weight-bold text-primary text-decoration-none bg-transparent btn p-0"
              >
                {showInfo ? "Less Info" : "More Info"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderCard;
