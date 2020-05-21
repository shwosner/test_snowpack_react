import React from "/web_modules/react.js";
import logo2 from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
function App2() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement("header", {
    className: "App-header"
  }, React.createElement("img", {
    src: logo2,
    className: "App-logo",
    alt: "logo"
  }), React.createElement("p", null, "Edit ", React.createElement("code", null, "src/App.jsx"), " and save to reload."), React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")));
}
export default App2;
