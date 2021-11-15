import React from 'react';

import {
  Link
} from "react-router-dom";

import Founder from './Founder';
import RoadMap from './RoadMap';

import "../css/MainBackground.css";
import "../css/CustomButtons.css";

export default function Main(props) {
  return (
    <>
      <div className="container text-light mt-5 ">


        <div className="bg-holder" style={{ backgroundImage: 'url(img/bg/heroheader-bg.png)', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 p-4">
            {/* <img className="img-fluid  mt-2 cardBackground" src="img/mainHeroMask.jpg" alt="" /> */}
            <img className="mt-2" style={{ width: '100%' }} src="img/herogif.gif" alt="" />

          </div>
          <div className="col-md-7 text-center">

            <h1 className="glitch " data-text="Click The Button To Mint NFT">Click The Button To Mint NFT</h1>
            <Link to="/mint-nft" ><button className="mybtn btn-hover btn-glow color-9 px-5 lead">Mint Your NFT</button> </Link>

          </div>
        </div>
      </div>



      <div className="container " >
        <div className="row align-items-center justify-content-center py-5 border-klean">
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start"><a href="https://discord.com/invite/tXG6jHkp9u" target="_blank"><i className="bi bi-discord text-primary" style={{ fontSize: 120 }}></i></a> </div>
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start"><a href="https://www.instagram.com/crypt0criminals" target="_blank"><i className="bi bi-instagram text-primary" style={{ fontSize: 120 }}></i></a> </div>
          <div className="col-auto col-md-4 col-lg-auto my-3 text-xl-start"><a href="https://twitter.com/crypt0criminals" target="_blank"><i className="bi bi-twitter text-primary" style={{ fontSize: 120 }}></i></a> </div>

        </div>
      </div>

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

      <div className="container text-center text-light mt-5">

        <x-sign  >
          <h1 className="mb-4 display-3">FAQ</h1>
        </x-sign  >

        <div className="mb-5">
        <a className="text-decoration-none" target="_blank" href="https://discord.com/invite/tXG6jHkp9u">
        <x-sign  >
        <h5>Visit our Discord <i className="bi bi-discord text-primary" ></i></h5>
        </x-sign  >

        </a>
        </div>

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
      </div>

      <Founder />


      <div className="container text-light">
      <x-sign  >
        <h5>Each Crypto Criminal has one of seven micro logos. The micro logo determines your position within the Crypto Criminals hierarchy</h5>
        </x-sign  >
      
      </div>

      <div className="row py-4 justify-content-center">
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/1.png" alt="" />
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Boss of all Bosses</span>
        </x-sign  >

          {/* <h5 className="text-light">1</h5> */}

        </div>

        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/2.png" alt="" />
          {/* <h5 className="text-light">2</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Boss</span>
          </x-sign  >

        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/3.png" alt="" />
          {/* <h5 className="text-light">3</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Consigliere</span>
          </x-sign  >

        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/4.png" alt="" />
          {/* <h5 className="text-light">4</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Underboss</span>
          </x-sign  >


        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/5.png" alt="" />
          {/* <h5 className="text-light">5</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Captain</span>
          </x-sign  >


        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/6.png" alt="" />
          {/* <h5 className="text-light">6</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Soldier</span>
          </x-sign  >

        </div>
        <div className="col-lg-2 col-4 text-center">
          <img className="img-fluid" src="img/b/7.png" alt="" />
          {/* <h5 className="text-light">7</h5> */}
        <x-sign  >

          <span className="badge rounded-pill bg-primary py-2 px-2">Associate</span>
          </x-sign  >

        </div>
      </div>


    </>
  )
}

