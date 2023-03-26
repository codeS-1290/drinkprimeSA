import React from "react"
import ReactDOM from "react-dom"

// THESE 2 STATEMENTS ABOVE ARE HOOKS THAT ALLOW OUR REACT TO COMMUNICATE WITH THE HTML

import App from "./App"
import "./index.css"
// For the strings without a file extension eg "./App", it is already a javascript file by default therefore no
// need for .js after

ReactDOM.render(<App />, document.getElementById("root"))
