import React from "react";

export default function Footer() {
  return (
    <footer className="container pt-5 pb-3">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 mb-md-0 mb-4">
          <div className="row justify-content-md-start justify-content-center align-items-center">
            <div className="col-1 mr-4">
              <a
                href="https://instagram.com/crypto0criminals"
                target="_blank"
                className="text-decoration-none text-primary"
              >
                <i className="bi bi-instagram h3"></i>
              </a>
            </div>
            <div className="col-1 mr-4">
              <a
                href="https://twitter.com/crypto0criminals"
                target="_blank"
                className="text-decoration-none text-primary"
              >
                <i className="bi bi-twitter h3"></i>
              </a>
            </div>
            <div className="col-1 mr-4">
              <a
                href="https://bit.ly/crypto0crim"
                target="_blank"
                className="text-decoration-none text-primary"
              >
                <i className="bi bi-discord h3"></i>
              </a>
            </div>
            <div className="col-1 mr-4">
              <a
                href="https://www.tiktok.com/@crypto_criminals"
                target="_blank"
                className="text-decoration-none text-primary"
              >
                <img src="/img/opensea.png" className="opensea"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <p className="text-white font-roboto-mono text-md-left text-center">
            &copy; 2021 Crypto Criminals. All rights Reserved Golden Toupee //
            Production LLC.
          </p>
        </div>
      </div>
    </footer>
    // <div className="container text-light">
    //   <hr className="text-100 mb-0" />
    //   <div className="row justify-content-center text-center py-3">
    //     <div className="col-xl-4 ">
    //       <ul className="list-unstyled list-inline">
    //         <li className="list-inline-item">
    //           <a
    //             className="text-decoration-none"
    //             href="https://discord.com/invite/tXG6jHkp9u"
    //           >
    //             <i className="bi bi-discord text-primary"></i>
    //           </a>
    //         </li>
    //         <li className="list-inline-item">
    //           <a
    //             className="text-decoration-none"
    //             href="https://www.instagram.com/crypt0criminals"
    //           >
    //             <i className="bi bi-instagram text-primary"></i>
    //           </a>
    //         </li>
    //         <li className="list-inline-item">
    //           <a
    //             className="text-decoration-none"
    //             href="https://twitter.com/crypt0criminals"
    //           >
    //             <i className="bi bi-twitter text-primary"></i>
    //           </a>
    //         </li>
    //         <li className="list-inline-item">
    //           <a
    //             className="text-decoration-none"
    //             href="https://twitter.com/crypt0criminals"
    //           >
    //             {" "}
    //             <img
    //               className=""
    //               style={{ width: 18 }}
    //               src="img/opensea.png"
    //               alt=""
    //             />{" "}
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col-xl">
    //       <x-sign>
    //         <p className="">
    //           {" "}
    //           &copy; 2021 Crypto Criminals. All rights Reserved Golden Toupee
    //           Production LLC.
    //         </p>
    //       </x-sign>
    //     </div>
    //   </div>
    // </div>
  );
}
