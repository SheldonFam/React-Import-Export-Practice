//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

import React from "react";
import ReactDOM from "react-dom";
import * as formula from "./calculator";

ReactDOM.render(
  <ul>
    <li>{formula.add(1, 2)}</li>
    <li>{formula.multiply(2, 3)}</li>
    <li>{formula.subtract(7, 2)}</li>
    <li>{formula.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
