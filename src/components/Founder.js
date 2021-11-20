import React from "react";
import FounderCard from "./FounderCard";

import "../css/Founder.css";

export default function Founder({ vidHeight }) {
  const founders = [
    {
      id: 1,
      img: "the-crazy-greek.png",
      title: "The Crazy Greek",
      origin: "Greece",
      position: "Boss",
      specialities: "Networking and Staying in Trouble",
      crimes:
        "Transnational Drug Trafficking, Labor Racketeering, Bid Rigging, Murder, Breaking and Entering, Driving Under the Influence, Illegal possession of fireworks, Illegal operation of a dirt- bike on a public road.",
      animatePosition: "fade-left",
      animateDuration: "400",
      animateDelay: "100",
    },
    {
      id: 2,
      img: "diamond-hands.png",
      title: "Mr. Diamondhands",
      origin: "Sierra Leone",
      position: "Consigliere",
      specialities: "Long Term Growth of all Business Assets and Fitness",
      crimes:
        "Racketeering, Money Laundering, Wire Fraud, mbezzlement, and suspected involvement in 23 murders.",
      animatePosition: "fade-down",
      animateDuration: "400",
      animateDelay: "200",
    },
    {
      id: 3,
      img: "brahtoshi.png",
      title: "Brahtoshi",
      origin: "Ireland",
      position: "Underboss",
      specialities: "Unsuccessful Car Bombings",
      crimes:
        "Loansharking, Murder, Weapons Trafficking, Cigarette Smuggling, Gambling",
      animatePosition: "fade-right",
      animateDuration: "400",
      animateDelay: "300",
    },
    {
      id: 4,
      img: "el-founder.jpg",
      title: "El Tiguere",
      origin: "United States",
      position: "Soldier",
      specialities: "Extreme Violence with a flair for Creativity",
      crimes: "Murder, Extortion, Kidnapping",
      animatePosition: "fade-left",
      animateDuration: "400",
      animateDelay: "100",
    },
    {
      id: 5,
      img: "01001101.png",
      title: "01001101",
      origin: "Unknown",
      position: "Associate",
      specialities: "Surveillance, Counter-Surveillance, and Anti-Surveillance",
      crimes: "Ransomware Attacks and Extortion, IP Theft, Doss Attacks",
      animatePosition: "fade-right",
      animateDuration: "400",
      animateDelay: "200",
    },
  ];

  const renderFounders = founders.map((founder) => {
    return (
      <React.Fragment key={founder.id}>
        <div
          className="col-xl-4 col-md-6 col-12 mb-5"
          data-aos={founder.animatePosition}
          data-aos-duration={founder.animateDuration}
          data-aos-delay={founder.animateDelay}
        >
          <FounderCard
            founderTitle={founder.title}
            founderImg={founder.img}
            founderOrigin={founder.origin}
            founderPosition={founder.position}
            founderSpecs={founder.specialities}
            founderCrimes={founder.crimes}
          />
        </div>
      </React.Fragment>
    );
  });

  // const cardClass = "col-lg-4 col-md-6 my-3 text-center ";

  // const cardStyle = {
  //   borderRadius: 40,
  //   width: 320,
  //   height: 600,
  // };

  // const cardImgStyle = {
  //   borderRadius: 40,
  //   width: 300,
  // };

  return (
    <>
      <section className="mb-5 text-center text-light overflow-x-hidden">
        <div className="founder-bg py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="display-3 glitch d-lg-block d-none">
                  MEET THE FOUNDERS
                </h1>
                <h1 className="h2 glitch d-lg-none d-block">
                  MEET THE FOUNDERS
                </h1>
              </div>
              <div className="col-12 my-5">
                <div className="row justify-content-lg-around">
                  {renderFounders}
                </div>
              </div>
              <div className="col-12">
                <iframe
                  width="100%"
                  height={`${vidHeight}px`}
                  src="https://www.youtube.com/embed/nnu9QIHxsfk"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <x-sign>
          <h1 className="display-3">Meet the Founders</h1>
        </x-sign> */}

        {/* <div className="row py-5 justify-content-around">
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
        </div> */}
        {/* <img className="img-fluid" src="img/f/allFounder.jpg" alt="" /> */}
      </section>
    </>
  );
}
