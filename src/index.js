import React from "react";
import ReactDOM from "react-dom";
import App from "./Hooks";

import OOP from "./OOP";
import css from "./style/index";

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
