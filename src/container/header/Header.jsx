import React from "react";
import "./header.css";
import HeaderImage from "../../assets/Header Illustration.png";
import People from "../../assets/Group 81.png";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <section className="gpt3__header-left">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="gerry@C.com" />
            <button>Get Started</button>
          </div>
          <div className="gpt3__header-content-people">
            <img src={People} alt="people" height="40" width="140" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </section>
        <div className="gpt3__header-image">
          <img src={HeaderImage} alt="OpenAI" width="500" height="450" />
        </div>
      </div>
    </div>
  );
}

export default Header;
