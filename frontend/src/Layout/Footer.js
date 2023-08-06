import React from "react";
import { Link } from "react-router-dom";
import IMG from "../assets/instagram.png";
import IMG2 from "../assets/twitter.png";
import IMG3 from "../assets/facebook.png";

function Footer() {
  return (
    <footer className="flex w-[80%] mx-auto p-5" style={{ color: "white" }}>
      <div className="flex-1">
        <p className="login_forgot_password">Contact:</p>
        1800 9090 32
        <br />
        1800 9000 64
        <p className="login_forgot_password mt-5">Helpline Number:</p>
        9090 1234 46
        <br />
        9090 1234 47
        <p className="login_forgot_password mt-5">Email:</p>
        complaint@electionindia.gov.in
        <br />
        info@electionindia.gov.in
      </div>
      <div className="flex-1">
        <div className="flex mx-auto space-x-3">
        
          <div className="flex-1">
            <p className="login_forgot_password underline">GetIn</p>
            <Link to="/#features">Features</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/#steps">Steps</Link>
          </div>
          <div className="flex-1">
            <p className="login_forgot_password underline">Follow Us</p>
            Facebook
            <br />
            Instagram
            <br />
            Twitter
          </div>
        </div>

        <div className="flex mx-auto space-x-3">
          <img src={IMG2} alt="instagram" />
          <img src={IMG3} alt="instagram" />
          <img src={IMG} alt="instagram" />
        </div>

        <div className="text-center italic mt-10">&copy;shank.design</div>
      </div>
    </footer>
  );
}

export default Footer;
