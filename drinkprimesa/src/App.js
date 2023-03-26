import React from "react";
import { Cta, Footer, Hero, Navbar, Products } from "./components";
import { Blobs, Cards } from "./containers";
import "./App.css";
/*
// SO we have imported all the segmented components in the main div with the id of root: See HTML for more
// This allows us to connect all the different segments of our react website in one place 

But we need to do another thing like this and create a container folder for bigger compontents
 and link it the same way which would be a better practice*/

const App = () => {
  return (
    <div className="App">
      <div className="color-app">
        <Navbar />
        <Hero />
        <Products />
        <Blobs/>
        <Cta/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
