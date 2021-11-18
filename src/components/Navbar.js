import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";
// import CountDown from "./CountDown";
import cn from "classnames";

export default function Navbar(props) {
  const { connectToWeb3, account } = props;

  // const [navbarActive, setnavbarActive] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [logoHeight, setLogoHeight] = useState(140);
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
      setLogoHeight(80);
    } else {
      setLogoHeight(140);
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

    (function(document, history, location) {
      var HISTORY_SUPPORT = !!(history && history.pushState);

      var anchorScrolls = {
        ANCHOR_REGEX: /^#[^ ]+$/,
        OFFSET_HEIGHT_PX: 70,

        /**
         * Establish events, and fix initial scroll position if a hash is provided.
         */
        init: function() {
          this.scrollToCurrent();
          window.addEventListener(
            "hashchange",
            this.scrollToCurrent.bind(this)
          );
          document.body.addEventListener(
            "click",
            this.delegateAnchors.bind(this)
          );
        },

        /**
         * Return the offset amount to deduct from the normal scroll position.
         * Modify as appropriate to allow for dynamic calculations
         */
        getFixedOffset: function() {
          return this.OFFSET_HEIGHT_PX;
        },

        /**
         * If the provided href is an anchor which resolves to an element on the
         * page, scroll to it.
         * @param  {String} href
         * @return {Boolean} - Was the href an anchor.
         */
        scrollIfAnchor: function(href, pushToHistory) {
          var match, rect, anchorOffset;

          if (!this.ANCHOR_REGEX.test(href)) {
            return false;
          }

          match = document.getElementById(href.slice(1));

          if (match) {
            rect = match.getBoundingClientRect();
            anchorOffset =
              window.pageYOffset + rect.top - this.getFixedOffset();
            window.scrollTo(window.pageXOffset, anchorOffset);

            // Add the state to history as-per normal anchor links
            if (HISTORY_SUPPORT && pushToHistory) {
              history.pushState({}, document.title, location.pathname + href);
            }
          }

          return !!match;
        },

        /**
         * Attempt to scroll to the current location's hash.
         */
        scrollToCurrent: function() {
          this.scrollIfAnchor(window.location.hash);
        },

        /**
         * If the click event's target was an anchor, fix the scroll position.
         */
        delegateAnchors: function(e) {
          var elem = e.target;

          if (
            elem.nodeName === "A" &&
            this.scrollIfAnchor(elem.getAttribute("href"), true)
          ) {
            e.preventDefault();
          }
        },
      };

      window.addEventListener(
        "DOMContentLoaded",
        anchorScrolls.init.bind(anchorScrolls)
      );
    })(window.document, window.history, window.location);

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
          <div className="navbar-brand mx-xl-0 position-relative z-100 pl-2">
            <Link to="/">
            <a href="#">
              <img
                className="img-fluid transition-all"
                src="/img/logo2.ico"
                alt=""
                style={{ height: logoHeight }}
              />
            </a>
            </Link>
          </div>

          <div className="d-xl-none d-flex mr-n4">
            <Link to="/mint-nft">
              <button className="mint-btn">Mint Now</button>
            </Link>
          </div>

          <button
            className="navbar-toggler mr-2"
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
            <div className="mr-3 d-xl-block d-none">
              <Link to="/mint-nft">
                <button className="mint-btn">Mint Now</button>
              </Link>
            </div>
            <a
              href="https://discord.com/invite/tXG6jHkp9u"
              target="_blank"
              className="discord-btn px-4 py-2 font-roboto-mono z-100 mx-xl-0 mx-auto  text-center"
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
