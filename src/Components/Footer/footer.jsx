// import React from 'react'
import fb from "../assets/facebook.png";//dei png files path correct ah kudu
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/instagram.png";
import "./footer.css";
const Footer = () => {
  return (
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-Links">
                    <div className="sb__footer-Links-div">
                        <h4>My Account</h4>
                        <a href="/acc">
                            <p>My Account</p>
                        </a>
                        <a href="/orders">
                            <p>Order History</p>
                        </a>
                        <a href="/cont">
                            <p>Contact us</p>
                        </a>
                    </div>
                    <div className="sb__footer-Links-div">
                        <h4>Company</h4>
                        <a href="/us">
                            <p>About us</p>
                        </a>
                        <a href="/media">
                            <p>Media</p>
                        </a>
                        <a href="/seed">
                            <p>Seed Bank</p>
                        </a>
                    </div>
                    <div className="sb__footer-Links-div">
                        <h4>Refund & Cancellation</h4>
                        <a href="/tsed">
                            <p>Seed treatment</p>
                        </a>
                        <a href="/ret">
                            <p>Return Policy</p>
                        </a>
                        <a href="/shop">
                            <p>Shipping Policy</p>
                        </a>
                        <a href="/priv">
                            <p>Privacy Policy</p>
                        </a>
                    </div>
                    <div className="sb__footer-Links_div">
                        <h4>Our social media:</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={youtube} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} SIVA_GARDENERS. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-Links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>
        </div>
        
  )
}

export default Footer