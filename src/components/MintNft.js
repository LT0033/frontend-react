import React from 'react'
import '../css/MintModel.css';

export default function MintNft(props) {
    const { account, connectToWeb3 } = props;



    const showModel = async () => {

        var modal = document.getElementById("myModal");

        modal.style.display = "block";

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    return (
        <>
            <div className="contrainer text-light mb-5" style={{height:'100vh'}}>
                <div className="bg-holder" style={{ backgroundImage: 'url(img/bg/heroheader-bg.png)', backgroundPosition: 'right', backgroundSize: 'contain' }}>
                </div>
                <div className="row m-1 align-items-center justify-content-center">
                    <div className="col-md-7 text-center">
                        <h1 className="display-3 glitch" data-text="Mint Your Criminal Now!">Mint Your Criminal Now!</h1>
                        {account ?
                            <>
                                <button onClick={showModel} className="btn btn-primary btn-lg px-5">MINT</button>
                                <p className="lead mt-2" style={{ wordBreak: 'break-all' }}>Address: {account}</p>
                            </>
                            :
                            <>
                                <button onClick={connectToWeb3} className="btn btn-outline-primary btn-lg px-5 my-2">Connect</button>
                                <p className="lead mt-2">Please Connect Your Wallet</p>
                            </>
                        }
                    </div>
                    <div className="col-md-5 p-4  d-md-block d-none">
                    <img className="mt-2 cardBackground" style={{width:'100%'}} src="img/herogif.gif" alt="" />
                        
                    </div>
                </div>
            </div>


            <div id="myModal" className="modal">
                <div className="modal-content text-light text-center">
                    <h4>Mint You NFT Now!</h4>
                    <p>Price: 0.1 ΞTH Each</p>
                    <div className="row justify-content-center">
                        <div className="col-6 text-center">
                            <div className="mt-4">
                                <input type="number" className="form-control" placeholder="" />
                                <button className="btn-hover color-9 px-5 mt-2" type="button">Mint</button>                          
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="container text-light mb-5">
                <h3>Your Nfts:</h3>
                <div className="row">

                  
                    <div className="col-lg-3 col-md-4 text-center border border-dark py-3">
                        <img className="img-fluid" src="img/mainHeroMask2.jpg" alt="" style={{width:'100%',borderRadius:40,height:250}} />
                        <h5>Nft Name</h5>
                        <p>price: 1 Ether</p>
                        <button className="btn btn-outline-primary btn-sm mt-2">OpenSea</button>
                    </div><div className="col-lg-3 col-md-4 text-center border border-dark py-3">
                        <img className="img-fluid" src="img/mainHeroMask2.jpg" alt="" style={{width:'100%',borderRadius:40,height:250}} />
                        <h5>Nft Name</h5>
                        <p>price: 1 Ether</p>
                        <button className="btn btn-outline-primary btn-sm mt-2">OpenSea</button>
                    </div>
                </div>
            </div> */}

        </>
    )
}
