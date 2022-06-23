import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import "core-js/modules/es.array.map.js";
import React, { useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";
import { Helmet } from "react-helmet";
var HelmetContext = /*#__PURE__*/createContext(null);
export var HelmetProvider = function HelmetProvider(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      html = _useState2[0],
      setHtml = _useState2[1];

  var _useState3 = useState("ux"),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var HTML = useMemo(function () {
    return (
      /*#__PURE__*/
      // @ts-ignore
      React.createElement(Helmet, null, /*#__PURE__*/React.createElement("title", null, title), html.map(function (item) {
        return React.Children.map(item.component, function (child) {
          return /*#__PURE__*/React.cloneElement(child, {
            id: item.id
          });
        });
      }))
    );
  }, [title, html]);
  return /*#__PURE__*/React.createElement(HelmetContext.Provider, {
    value: {
      html: html,
      setHtml: setHtml,
      setTitle: setTitle
    }
  }, HTML, children);
};
export var useHelmet = function useHelmet(title) {
  var hel = useContext(HelmetContext);
  useEffect(function () {
    title && hel.setTitle(title);
  }, []);
  return hel;
};