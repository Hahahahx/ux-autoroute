import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "./Helmet";
import { RoutersRecursion } from "./RoutersRecursion";
export var Routers = function Routers(params) {
  var Router = params.type == "hash" ? HashRouter : BrowserRouter;
  return /*#__PURE__*/React.createElement(HelmetProvider, null, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(RoutersRecursion, params)));
};