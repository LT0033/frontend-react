import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

import "../css/Navbar.css"
import CountDown from './CountDown';

export default function Navbar(props) {

  const { connectToWeb3, account } = props;

  const [navbarActive, setnavbarActive] = useState(false);

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
    <CountDown />
    <nav className={`navbar  navbar-expand-xl navbar-dark bg-transprent '}`}>
      <div className="container-fluid px-md-5">
        <Link className="navbar-brand mx-xl-0 mx-auto " to="/">
          <img className="ml-xl-0 ml-5 img-fluid" src="img/logo2.png" alt="" style={{ height: 120 }} />
        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="fontPara navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">

            <li className="nav-item">
              <a className="nav-link " href="#">
                <h4 className="nav-link">OpenSea</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="https://discord.com/invite/tXG6jHkp9u" target="_blank">
                <h4 className="nav-link">Discord</h4>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="https://www.twitter.com/crypt0criminals" target="_blank">
                <h4 className="nav-link">Twitter</h4>
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/our-story">
                <h4 className="nav-link">Our Story</h4>
              </Link>
            </li>
          </ul>
          <button onClick={connectToWeb3} className="btn btn-dark btn-lg">{account ? `${account.substring(0, 3)}...${account.substring(account.length - 4, account.length)} ` : 'Connect'}</button>
        </div>

      </div>
    </nav>
    </>
  )
}
