import React from "react";
import { Cta, Footer, Hero, Navbar, Products } from "./components";
import "./App.css";

const App = () => {


  return (
    <div className="App">
      <div className="color-app">
        <Navbar />
        <Hero/>
          <Products />
          <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default App;
