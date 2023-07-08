import React from "react";
import "./feature.css";

function Feature({ title, text }) {
  return (
    <main className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <section />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </main>
  );
}

export default Feature;
