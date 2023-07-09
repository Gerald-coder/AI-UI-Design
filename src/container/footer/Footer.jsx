import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          with AI, you take a step further into the future
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Get earliest update</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>owerri, NO. 2 Douglas</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4> <p></p>
          <p>Overons</p>
          <p>Contacts</p>
          <p>Counters</p>
          <p>Social Media</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4> <p></p>
          <p>Terms and Conditions</p>
          <p>Privacy policies</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4> <p></p>
          <p>Info@gerry.net</p>
          <p>Owerri Douglas road</p>
          <p>03493-39810HJKJSUD</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023-GPT3 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
