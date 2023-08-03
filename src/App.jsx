import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
// import { Brand, CTA, Navbar } from "./components/index";
import MyBrand from "./components/Brand/MyBrand";
import CTA from "./components/CallToAction/CTA";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <MyBrand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
