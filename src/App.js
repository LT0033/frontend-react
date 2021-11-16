import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import OurStory from "./components/OurStory";

import Web3 from "web3";
// import ContractAbi from './abis/ContractAbi.json'

import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MintNft from "./components/MintNft";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  componentDidMount() {
    AOS.init();
    this.setState({ loading: false });
  }

  async connectToWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      this.loadBlockchainData();
    } else {
      this.setState({ connected: false });
    }
  }

  async loadBlockchainData() {
    const web3 = new Web3(window.ethereum);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log(account);
    web3.eth.defaultAccount = accounts[0];
    this.setState({ account: accounts[0] });

    // const networkId = await web3.eth.net.getId()
    // const ourSocialMediaData = OurSocialMediaJson.networks[networkId]

    // if (ourSocialMediaData) {
    //   const ourSocialMedia = web3.eth.Contract(OurSocialMediaJson.abi, ourSocialMediaData.address);
    //   this.setState({ ourSocialMedia })

    // }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      userProfile: null,
      loading: true,
    };
    this.connectToWeb3 = this.connectToWeb3.bind(this);
  }

  render() {
    return !this.state.loading ? (
      <div className="" style={{ overflow: "hidden" }}>
        <HashRouter>
          <Navbar
            account={this.state.account}
            connectToWeb3={this.connectToWeb3}
          />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path="/mint-nft" exact>
              <MintNft
                account={this.state.account}
                connectToWeb3={this.connectToWeb3}
              />
            </Route>

            <Route path="/our-story" exact>
              <OurStory />
            </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    ) : (
      <div
        className="text-center align-items-center justify-content-center"
        style={{ height: "100vh", display: "flex" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
        <h3 className="text-light m-2">Please Wait.....</h3>
      </div>
    );
  }
}

export default App;
