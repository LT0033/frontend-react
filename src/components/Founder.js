import React from "react";

import "../css/Founder.css";

export default function Founder() {
  const cardClass = "col-lg-4 col-md-6 my-3 text-center ";

  const cardStyle = {
    borderRadius: 40,
    width: 320,
    height: 600,
  };

  const cardImgStyle = {
    borderRadius: 40,
    width: 300,
  };

  return (
    <>
      <div className="container my-5 text-center text-light">
        <x-sign>
          <h1 className="display-3">Meet the Founders</h1>
        </x-sign>

        <div className="row py-5 justify-content-around">
          <div className={cardClass}>
            <div
              className="py-2 border border-dark text-center cardBackground mx-auto"
              style={cardStyle}
            >
              <div className="cardImg">
                <img
                  src="img/f/theFounder.jpg"
                  style={cardImgStyle}
                  alt=""
                  className=" img-fluid"
                />
              </div>
              <div className="">
                <x-sign>
                  <h1>The Crazy Greek</h1>
                  <p>Origin: Greece</p>
                  <p>Position: Boss</p>
                  <p>
                    Crimes: Transnational Drug Trafficking, Labor Racketeering,
                    Bid Rigging, Murder, Breaking and Entering, Driving Under
                    the Influence, Illegal possession of fireworks, Illegal
                    operation of a dirt- bike on a public road.
                  </p>
                  <p>Specialties: Networking and Staying in Trouble</p>
                </x-sign>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div
              className="py-2 border border-dark text-center cardBackground mx-auto"
              style={cardStyle}
            >
              <div className="cardImg">
                <img
                  src="img/f/mrFounder.jpg"
                  style={cardImgStyle}
                  alt=""
                  className=" img-fluid"
                />
              </div>
              <div className="">
                <x-sign>
                  <h2>Mr. Diamondhands</h2>
                  <p>Origin: Sierra Leone</p>
                  <p>Position: Consigliere</p>
                  <p>
                    Crimes: Racketeering, Money Laundering, Wire Fraud,
                    Embezzlement, and suspected involvement in 23 murders.
                  </p>
                  <p>
                    Specialties: Long Term Growth of all Business Assets and
                    Fitness
                  </p>
                </x-sign>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div
              className="py-2 border border-dark text-center cardBackground mx-auto"
              style={cardStyle}
            >
              <div className="cardImg">
                <img
                  src="img/f/brFounder.jpg"
                  style={cardImgStyle}
                  alt=""
                  className=" img-fluid"
                />
              </div>
              <div className="">
                <x-sign>
                  <h1>Brahtoshi</h1>
                  <p>Origin: Ireland</p>
                  <p>Position: Underboss</p>
                  <p>
                    Crimes: Loansharking, Murder, Weapons Trafficking, Cigarette
                    Smuggling, Gambling
                  </p>
                  <p>Specialties: Unsuccessful Car Bombings</p>
                </x-sign>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div
              className="py-2 border border-dark text-center cardBackground mx-auto"
              style={cardStyle}
            >
              <div className="cardImg ">
                <img
                  src="img/f/elFounder.jpg"
                  style={cardImgStyle}
                  alt=""
                  className=" img-fluid"
                />
              </div>
              <div className="">
                <x-sign>
                  <h1 className="">El Tiguere</h1>
                  <p>Origin: The United States</p>
                  <p>Position: Soldier</p>
                  <p>Crimes: Murder, Extortion, Kidnapping</p>
                  <p>
                    Specialties: Extreme Violence with a flair for Creativity
                  </p>
                </x-sign>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div
              className="py-2 border border-dark text-center cardBackground mx-auto"
              style={cardStyle}
            >
              <div className="cardImg">
                <img
                  src="img/f/01.jpg"
                  style={cardImgStyle}
                  alt=""
                  className=" img-fluid"
                />
              </div>
              <div className="">
                <x-sign>
                  <h1>01001101</h1>
                  <p>Origin: Unknown</p>
                  <p>Position: Associate</p>
                  <p>
                    Crimes: Ransomware Attacks and Extortion, IP Theft, Doss
                    Attacks
                  </p>
                  <p>
                    Specialties: Surveillance, Counter-Surveillance, and
                    Anti-Surveillance
                  </p>
                </x-sign>
              </div>
            </div>
          </div>
        </div>
        <img className="img-fluid" src="img/f/allFounder.jpg" alt="" />
      </div>
    </>
  );
}
