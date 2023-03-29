import React, { useRef } from "react";
import { Cta, Footer, Hero, Navbar, Products } from "./components";
import { Blobs, Cards } from "./containers";
import "./App.css";
import $ from "jquery";

const App = () => {
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToRef = (ref) => {
    $("html, body").animate(
      {
        scrollTop: ref.current.offsetTop,
      },
      1000
    );
  };

  return (
    <div className="App">
      <div className="color-app">
        <Navbar />
        <Hero />
        <div ref={productsRef}>
          <Products />
        </div>
        <div ref={ctaRef}>
          <Cta />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

/*   return (
    <div className="App">
      <div className="color-app">
        <Navbar />
        <Hero />
        <div ref={productsRef}>
          <Products />
        </div>
        <div ref={ctaRef}>
          <Cta />
        </div>
        <Footer />
      </div>
    </div>
  ); */
