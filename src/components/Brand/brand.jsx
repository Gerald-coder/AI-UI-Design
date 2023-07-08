import React from "react";
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./import";

function Brand() {
  const images = [atlassian, dropbox, google, shopify, slack];
  return (
    <div className="gpt3__brand section__padding">
      {images.map((img) => {
        return (
          <div>
            <img src={img} />
          </div>
        );
      })}
    </div>
  );
}

export default Brand;
