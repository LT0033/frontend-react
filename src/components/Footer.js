import React from "react";

export default function Footer() {
  return (
    <div className="container text-light">
      <hr className="text-100 mb-0" />
      <div className="row justify-content-center text-center py-3">
        <div className="col-xl-4 ">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a
                className="text-decoration-none"
                href="https://discord.com/invite/tXG6jHkp9u"
              >
                <i className="bi bi-discord text-primary"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-decoration-none"
                href="https://www.instagram.com/crypt0criminals"
              >
                <i className="bi bi-instagram text-primary"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-decoration-none"
                href="https://twitter.com/crypt0criminals"
              >
                <i className="bi bi-twitter text-primary"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="text-decoration-none"
                href="https://twitter.com/crypt0criminals"
              >
                {" "}
                <img
                  className=""
                  style={{ width: 18 }}
                  src="img/opensea.png"
                  alt=""
                />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xl">
          <x-sign>
            <p className="">
              {" "}
              &copy; 2021 Crypto Criminals. All rights Reserved Golden Toupee
              Production LLC.
            </p>
          </x-sign>
        </div>
      </div>
    </div>
  );
}
