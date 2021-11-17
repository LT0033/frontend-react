import React from "react";
import ShowMoreText from "react-show-more-text";

const FounderCard = ({
  founderTitle,
  founderOrigin,
  founderPosition,
  founderSpecs,
  founderCrimes,
  founderImg
}) => {
  return (
    <>
      <div className="card bg-transparent">
        <img className="card-img-top" src={`/img/founders/${founderImg}`} />
        <div className="card-body text-left px-0">
          <h2 className="card-title font-poppins">{founderTitle}</h2>
          <div className="row">
            <div className="col-6">
              <p className="font-poppins text-white lead font-weight-bold">
                Origin:{" "}
                <span className="font-roboto-mono font-weight-light">
                  {founderOrigin}
                </span>
              </p>
            </div>
            <div className="col-6">
              <p className="font-poppins text-white lead font-weight-bold">
                Position:{" "}
                <span className="font-roboto-mono font-weight-light">
                  {founderPosition}
                </span>
              </p>
            </div>
            <div className="col-12 my-3">
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
                  <ShowMoreText
                    /* Default options */
                    lines={3}
                    more="More info"
                    less="Less info"
                    className="card-crime-text"
                    anchorClass="about-us-anchor"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                  >
                    {" "}
                    {founderCrimes}
                  </ShowMoreText>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderCard;
