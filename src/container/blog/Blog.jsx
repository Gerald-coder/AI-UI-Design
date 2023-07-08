import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  const date = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDay();
    const year = now.getFullYear();
    return `${day}/${month.toString().padStart(2, 0)}/${year}`;
  };
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          All you need to know, happening around you. We blog it here
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog04}
            date={date()}
            title="AI is the future, chatGPT is here to help us, lets explore it "
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date={date()}
            title="AI is the future, chatGPT is here to help us, lets explore it "
          />
          <Article
            imgUrl={blog03}
            date={date()}
            title="AI is the future, chatGPT is here to help us, lets explore it "
          />
          <Article
            imgUrl={blog01}
            date={date()}
            title="AI is the future, chatGPT is here to help us, lets explore it "
          />
          <Article
            imgUrl={blog05}
            date={date()}
            title="AI is the future, chatGPT is here to help us, lets explore it "
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
