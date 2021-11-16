import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
// import CountDown from "./CountDown";
import cn from "classnames";

export default function Navbar(props) {
  const { connectToWeb3, account } = props;

  // const [navbarActive, setnavbarActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [logoHeight, setLogoHeight] = useState(120);
  const [isScreenSmall, setScreenSmall] = useState(false);

  const checkNavScroll = () => {
    if (window.pageYOffset > 130) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  const checkScreenSize = () => {
    if (window.innerWidth < 1200) {
      setScreenSmall(true);
    } else {
      setScreenSmall(false);
    }
  };

  const setLogo = () => {
    if (window.innerWidth < 1200 || window.pageYOffset > 130) {
      setLogoHeight(70);
    } else {
      setLogoHeight(120);
    }
  };

  useEffect(() => {
    checkNavScroll();
    checkScreenSize();
    setLogo();

    window.addEventListener("scroll", () => {
      checkNavScroll();
      setLogo();
    });
    window.addEventListener("resize", () => {
      checkScreenSize();
      setLogo();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        checkNavScroll();
        setLogo();
      });
      window.addEventListener("resize", () => {
        checkScreenSize();
        setLogo();
      });
    };
  }, []);

  // const changeBackground = () => {
  //   if(window.scrollY >= 1){
  //     setnavbarActive(true)
  //   }else{
  //     setnavbarActive(false)
  //   }
  // }
  // window.addEventListener('scroll',changeBackground);

  return (
    <>
      {/* <CountDown /> */}
      <nav
        className={cn(
          "navbar navbar-expand-xl navbar-dark fixed-top transition-all p-0",
          {
            "bg-black": navbarScrolled,
            "bg-transparent": !navbarScrolled,
          }
        )}
      >
        <div className="container-fluid position-relative">
          <div className="navbar-brand mx-xl-0 position-relative z-100 pl-4">
            <Link to="/">
              <img
                className="img-fluid transition-all"
                src="/img/logo2.png"
                alt=""
                style={{ height: logoHeight }}
              />
            </Link>
          </div>

          <button
            className="navbar-toggler mr-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={cn(
              "collapse navbar-collapse justify-content-end pb-xl-0 pb-4 px-xl-0 px-4",
              {
                "bg-black": isScreenSmall,
                "bg-transparent": !isScreenSmall,
              }
            )}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-xl-0 absolute-center">
              <li className="nav-item">
                <a
                  className="nav-link font-roboto-mono h5 mt-xl-0 mt-4"
                  href="#about-us"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-roboto-mono h5" href="#roadmap">
                  ROADMAP
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link font-roboto-mono h5 mb-xl-0 mb-4"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
            {/* <button onClick={connectToWeb3} className="btn btn-dark btn-lg">
              {account
                ? `${account.substring(0, 3)}...${account.substring(
                    account.length - 4,
                    account.length
                  )} `
                : "Connect"}
            </button> */}
            <a
              href="https://discord.com/invite/tXG6jHkp9u"
              target="_blank"
              className="discord-btn px-4 py-2 font-roboto-mono z-100 mx-xl-0 mx-auto w-auto text-center"
            >
              <i className="bi bi-discord mr-2"></i>
              <span className="ml-2">join discord</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
