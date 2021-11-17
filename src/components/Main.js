import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Founder from "./Founder";
import RoadMap from "./RoadMap";
import ShowMoreText from "react-show-more-text";
import Accordion from "./Accordion";
import gsap, { Power3 } from "gsap";

import "../css/MainBackground.css";
import "../css/CustomButtons.css";

export default function Main(props) {
  const [vidHeight, setVidHeight] = useState(500);

  const changeVidHeight = () => {
    if (window.innerWidth < 768) {
      setVidHeight(300);
    } else {
      setVidHeight(500);
    }
  };

  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.";

  const data = [
    {
      title: "Pricing plans",
      paragraph,
    },
    {
      title: "How to apply",
      paragraph,
    },
    {
      title: "Purchasing process",
      paragraph,
    },
    {
      title: "Usage guides",
      paragraph,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".mask-1",
      {
        y: -200,
        opacity: 0.3,
        duration: 1,
        ease: Power3.easeInOut,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: Power3.easeInOut,
      }
    );

    changeVidHeight();
    window.addEventListener("resize", () => {
      changeVidHeight();
    });
    return () => {
      window.removeEventListener("resize", () => {
        changeVidHeight();
      });
    };
  }, []);

  return (
    <>
      <section className="text-light bg-holder row align-items-center position-relative banner">
        {/* <div
          className="bg-holder"
          style={{
            backgroundImage: "url(img/bg/heroheader-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div> */}

        <div className="container px-4">
          <div className="row align-items-center justify-content-center">
            {/* <div className="col-md-5 p-4">
            <img className="img-fluid  mt-2 cardBackground" src="img/mainHeroMask.jpg" alt="" />
            <img
              className="mt-2"
              style={{ width: "100%" }}
              src="img/herogif.gif"
              alt=""
            />
          </div>
          <div className="col-md-7 text-center">
            <h1 className="glitch " data-text="Click The Button To Mint NFT">
              Click The Button To Mint NFT
            </h1>
            <Link to="/mint-nft">
              <button className="mybtn btn-hover btn-glow color-8 px-5 lead">
                Mint Your NFT
              </button>{" "}
            </Link>
          </div> */}
            <div className="col-12 text-center">
              <h1 className="display-1 text-uppercase font-weight-bold glitch mb-3 d-xl-block d-none">
                crypto criminals
              </h1>
              <h1 className="display-3 text-uppercase font-weight-bold glitch mb-3 d-xl-none d-sm-block d-none">
                crypto criminals
              </h1>
              <h1 className="h3 text-uppercase font-weight-bold glitch mb-3 d-sm-none d-block">
                crypto criminals
              </h1>
              <p className="font-roboto-mono text-white lead font-weight-light">
                11111 unique NFT Crypto Criminal masks worn by the outlaws of
                The Metaverse. No Face No Case.
              </p>
            </div>
            <div className="col-12 row justify-content-center my-5 banner-btn">
              <a
                href="https://discord.com/invite/tXG6jHkp9u"
                target="_blank"
                className="discord-btn-2 py-3 px-5"
              >
                <i className="bi bi-discord mr-2"></i>
                <span className="ml-2 font-roboto-mono">join discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="masks-container">
          <div className="position-relative bg-primary">
            <img src="/img/mask-1.png" className="mask-1" />
            <img src="/img/mask-2.png" className="mask-2" />
            <img src="/img/mask-3-founder.png" className="mask-3" />
            <img src="/img/mask-4.png" className="mask-4" />
            <img src="/img/mask-5.png" className="mask-5" />
            <img src="/img/mask-6.png" className="mask-6" />
          </div>
        </div>
      </section>

      {/* <div className="container ">
        <div className="row align-items-center justify-content-center py-5 border-klean">
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <a href="https://discord.com/invite/tXG6jHkp9u" target="_blank">
              <i
                className="bi bi-discord text-primary"
                style={{ fontSize: 120 }}
              ></i>
            </a>{" "}
          </div>
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <a href="https://www.instagram.com/crypt0criminals" target="_blank">
              <i
                className="bi bi-instagram text-primary"
                style={{ fontSize: 120 }}
              ></i>
            </a>{" "}
          </div>
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start">
            <a href="https://twitter.com/crypt0criminals" target="_blank">
              <i
                className="bi bi-twitter text-primary"
                style={{ fontSize: 120 }}
              ></i>
            </a>{" "}
          </div>
        </div>
      </div> */}

      <section className="container py-5 bg-black">
        <div className="row">
          <div className="col-12 mt-md-5 mt-2 text-center">
            <h1
              className="text-white glitch display-3 d-sm-block d-none"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              A Crypto Criminals Presentation
            </h1>
            <h1
              className="text-white glitch h2 d-sm-none d-block"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              A Crypto Criminals Presentation
            </h1>
          </div>
          <div className="col-12 my-md-5 my-2">
            <video
              src="/videos/the-crazy-greek-speech.mp4"
              controls
              height={vidHeight}
              className="col-12"
            ></video>
          </div>
        </div>
      </section>

      {/* <OurStory /> */}

      {/* <div className="container-fluid bg-white my-5">
        <div className="row align-items-center justify-content-center ">
          <div className="col-12 text-center p-1">
            <h3 className="my-4">CRYPTOMOM WALLET SNAPSHOT IS ON OCTOBER 15TH @5PM EST.
            </h3>
            <h3 className="my-4">FREE TO MINT FOR ALL CRYPTODAD HOLDERS.
            </h3>
            <h3 className="my-4">OFFICIAL LAUNCH DATE: OCTOBER 19TH @7PM EST</h3>
            <h3 className="my-4">JOIN OUR DISCORD TO STAY UPDATED.</h3>
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid bg-white my-5">
        <div className="row align-items-center justify-content-center ">
          <div className="col-12 text-center p-2">
            <h3 className="my-4">Do you have to be a dad to join CryptoDads? Absolutely not!
            </h3>
            <h3 className="my-4">CryptoMom & CryptoTot NFT's will be free to mint for all CryptoDad holders. Everyone is welcome in the cave & CryptoDad community.
            </h3>

          </div>
        </div>
      </div> */}

      <RoadMap />

      <section className="container py-md-5 bg-black">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white glitch d-lg-block d-none my-5">
              The Point System
            </h1>
            <h1 className="h2 text-white glitch d-lg-none d-block my-5">
              The Point System
            </h1>
            <p className="text-white lead font-roboto-mono mb-5">
              Each mask is assigned a value between 1 and 3. Collect 10 points
              and receive an additional Crypto Criminal NFT.
            </p>
          </div>
        </div>
      </section>

      <section id="about-us" className="container py-5 bg-black">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-white display-3 d-lg-block d-none glitch">
              About Us
            </h1>
            <h1 className="text-white h2 d-lg-none d-block glitch">About Us</h1>
          </div>
          <div className="col-12">
            <ShowMoreText
              /* Default options */
              lines={3}
              more="Read more"
              less="Read less"
              className="about-us-text"
              anchorClass="about-us-anchor"
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              You casually recline in the back seat of your armored car. The
              spreadsheet on your encrypted computer stares back at you. And the
              profits it shows are staggering. <br />
              <br /> In this month alone, you coordinated drug deals and weapons
              trades, all while overseeing extensive gambling and loan-sharking
              operations. Bigger than profits, however, was simultaneously
              eliminating an investigation and a competitor. Two birds. One
              bullet. Then your mind's eye blinks, and you remember your
              predecessor doing life in prison, and your under boss who fell
              victim to a Columbian necktie. You wonder: Is "the life" worth the
              disastrous outcomes you've repeatedly witnessed? <br />
              <br /> There is a well-known saying; it goes a little something
              like this: “If you can’t do the time, don’t do the crime.” For
              most, this saying is all we need to live a life on the straight
              and narrow. Because the knowledge of consequence is a strong
              enough deterrent. Yet for some reason we consume countless hours
              of interviews, films, and documentaries, and we read millions of
              pages of books, all exploring—and in many instances
              celebrating—the stories of mobsters, drug kingpins, and outlaws.
              Because deep down we want to know if we have what it takes to
              ascend to the top of the underworld food chain. Or would we become
              a statistic, like the 99% who are dead or in jail? <br />
              <br /> Enter Crypto Criminals. An NFT project solely designed to
              help you find out if you will not just survive but thrive in a
              world predicated on deceit and violence. A world where breaking
              the law for a day isn’t sufficient. This is a world where you
              break the law for a living. Join us. One last thing: Don’t forget
              your mask. No face, no case. <br />
              <br /> Sincerely, <br />
              <br /> Crypto Criminals: The Crazy Greek, Mr. Diamondhands,
              Brahtoshi, El Tiguere, 01001101
            </ShowMoreText>
          </div>
          <div className="col-12 mt-md-2">
            <iframe
              width="100%"
              height={`${vidHeight}px`}
              src="https://www.youtube.com/embed/P2rajmx044I"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <section className="container bg-black py-5">
        <div className="row"></div>
      </section> */}

      {/* <div className="container text-center text-light mt-5">
        <x-sign>
          <h1 className="mb-4 display-3">FAQ</h1>
        </x-sign>

        <div className="mb-5">
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://discord.com/invite/tXG6jHkp9u"
          >
            <x-sign>
              <h5>
                Visit our Discord <i className="bi bi-discord text-primary"></i>
              </h5>
            </x-sign>
          </a>
        </div> */}

      {/* <div className="accordion " id="accordionExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header " id="headingThree">
              <button className="accordion-button collapsed bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" >
                When will minting begin?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Presale begins on September 7th @5PM EST.</strong>

                Public <code>Launch begins</code> on September 10th @5PM EST.

                Our amazing team has been working extremely hard for the past 4 1/2 months to bring this to life & the time is finally almost here!

              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark">
            <h2 className="accordion-header " id="headingThree">
              <button className="accordion-button collapsed bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" >
                When will minting begin?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Presale begins on September 7th @5PM EST.</strong>

                Public <code>Launch begins</code> on September 10th @5PM EST.

                Our amazing team has been working extremely hard for the past 4 1/2 months to bring this to life & the time is finally almost here!

              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark">
            <h2 className="accordion-header " id="headingThree">
              <button className="accordion-button collapsed bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" >
                When will minting begin?
              </button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Presale begins on September 7th @5PM EST.</strong>

                Public <code>Launch begins</code> on September 10th @5PM EST.

                Our amazing team has been working extremely hard for the past 4 1/2 months to bring this to life & the time is finally almost here!
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      <Founder vidHeight={vidHeight} />

      <section id="faq" className="py-md-5 container bg-black">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-3 glitch text-center d-lg-block d-none">
              FAQ
            </h1>
            <h1 className="h2 glitch text-center d-lg-none d-block">FAQ</h1>
          </div>
          <div className="col-12">
            <Accordion data={data} />
          </div>
        </div>
      </section>

      {/* <div className="container text-light">
        <x-sign>
          <h5>
            Each Crypto Criminal has one of seven micro logos. The micro logo
            determines your position within the Crypto Criminals hierarchy
          </h5>
        </x-sign>
      </div>

      <div className="row py-4 justify-content-center">
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/1.png" alt="" />
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Boss of all Bosses
            </span>
          </x-sign>

          <h5 className="text-light">1</h5>
        </div>

        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/2.png" alt="" />
          <h5 className="text-light">2</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Boss
            </span>
          </x-sign>
        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/3.png" alt="" />
          <h5 className="text-light">3</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Consigliere
            </span>
          </x-sign>
        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/4.png" alt="" />
          <h5 className="text-light">4</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Underboss
            </span>
          </x-sign>
        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/5.png" alt="" />
          <h5 className="text-light">5</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Captain
            </span>
          </x-sign>
        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/6.png" alt="" />
          <h5 className="text-light">6</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Soldier
            </span>
          </x-sign>
        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/7.png" alt="" />
          <h5 className="text-light">7</h5>
          <x-sign>
            <span className="badge rounded-pill bg-primary py-2 px-2">
              Associate
            </span>
          </x-sign>
        </div>
      </div> */}
    </>
  );
}
