import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.assign.js";
import React, { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import { RoutersRecursion } from "./RoutersRecursion";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

export var RouterContext = /*#__PURE__*/createContext({
  path: "",
  child: [],
  routers: [],
  unmount: function unmount() {},
  mount: function mount() {}
});
/**
 * 对外暴露的子集路由
 */

export var RouterView = function RouterView(_ref) {
  var props = Object.assign({}, _ref);
  var Router = useContext(RouterContext);
  var location = useLocation();

  if (props.mainComponent && location.pathname === Router.path) {
    return props.mainComponent;
  }

  if (Router.routers && Router.routers.length) {
    return /*#__PURE__*/React.createElement(RoutersRecursion, _objectSpread(_objectSpread({}, Router), props));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var useRouter = function useRouter() {
  var router = useContext(RouterContext);
  return _objectSpread({}, router);
};