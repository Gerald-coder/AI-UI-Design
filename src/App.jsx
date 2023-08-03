import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
// import { Brand, CTA, Navbar } from "./components/index";
import Brand from "./components/Brand/Brand";
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
      <Brand />
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
