import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

// menu function
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">what is GPT</a>
    </p>
    <p>
      <a href="#possibility">open AI</a>
    </p>
    <p>
      <a href="#features">Case study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="gpt3__navbar-links_container"
          // className={
          //   toggle
          //     ? "gpt3__navbar-links_container scale-up-center"
          //     : "gpt3__navbar-links_container offscreen"
          // }
        >
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine color="#fff" onClick={() => setToggle(false)} />
        ) : (
          <RiMenu3Line color="#fff" onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container-links scale-up-center">
            <Menu />
            <div className="gpt3__navbar-sign scale-up-center">
              <p>sign in</p>
              <button>sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
