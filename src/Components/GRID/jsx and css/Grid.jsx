// import React from 'react'
import "./Grid.css";
import quality from "../../assets/quality.png";
import ship from "../../assets/ship.png";
import secure from "../../assets/secure.png";
import bank from "../../assets/bank.png";
const Grid = () => {
  return (
    <div className="footer-second">
    <div className="sb__footer section_padding">
        <div className="sb__footer-Links">
            <div className="sb__footer-Links-div">
                <div className="icons">
                    <p><img src={quality} alt=""/></p>
                </div>
                <h2>Great Value & Quality</h2>
                <p>Powered by Farmers,<br></br><br></br>
                Organic Products from Local Farmers</p>
            </div>
            <div className="sb__footer-Links-div">
            <div className="icons">
                    <p><img src={secure} alt=""/></p>
                </div>
                <h2>Secure Payments</h2>
                <p>Razorpay Payment Gateway<br></br><br></br>
                UPI,Bank Transfer,Credit Cards.</p>
            </div>
            <div className="sb__footer-Links-div">
            <div className="icons">
                    <p><img src={ship} alt=""/></p>
                </div>
                <h2>Shipments in India</h2>
                    <p>Courier & Parcel Mode <br></br><br></br>
                    ST Courier,DTDC,Speed Post</p>
            </div>
            <div className="sb__footer-Links-div">
            <div className="icons">
                    <p><img src={bank} alt=""/></p>
                </div>
                <h2>Native Seed Bank</h2>
                    <p>Community Seed Bank,Conserve <br></br><br></br>
                    More number of Local Varities.</p>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Grid