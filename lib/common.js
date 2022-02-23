import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
export var RouterContext = /*#__PURE__*/createContext({
  path: "",
  child: []
});
/**
 * 对外暴露的子集路由
 */

export var RouterView = function RouterView(_ref) {
  var mainComponent = _ref.mainComponent;
  var Router = useContext(RouterContext);

  if (mainComponent && window.location.href.includes(Router.path)) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, mainComponent);
  }

  return Router.router ? Router.router : /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var useRouter = function useRouter() {
  var history = useHistory();
  var router = useContext(RouterContext);
  return _objectSpread(_objectSpread({}, router), {}, {
    history: history
  });
};
export var HtmlMetaContext = /*#__PURE__*/createContext({
  htmlMeta: {
    link: new Array(),
    meta: new Array(),
    title: "",
    javascript: new Array()
  },
  setHtmlMeta: function setHtmlMeta() {}
});
export var useHtmlMeta = function useHtmlMeta() {
  return useContext(HtmlMetaContext);
};