import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.string.link.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.array.filter.js";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HashRouter, BrowserRouter, useHistory } from "react-router-dom";
import { HtmlMetaContext, useHtmlMeta } from "./common";
import { RoutersRecursion } from "./RoutersRecursion";
export var Routers = function Routers(params) {
  var _htmlMeta$meta, _htmlMeta$link, _htmlMeta$javascript;

  var _useState = useState({
    link: new Array(),
    meta: new Array(),
    title: "",
    javascript: new Array()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      htmlMeta = _useState2[0],
      setHtmlMeta = _useState2[1];

  return /*#__PURE__*/React.createElement(HtmlMetaContext.Provider, {
    value: {
      htmlMeta: htmlMeta,
      setHtmlMeta: setHtmlMeta
    }
  }, /*#__PURE__*/React.createElement(Helmet, null, htmlMeta === null || htmlMeta === void 0 ? void 0 : (_htmlMeta$meta = htmlMeta.meta) === null || _htmlMeta$meta === void 0 ? void 0 : _htmlMeta$meta.map(function (item) {
    return /*#__PURE__*/React.createElement("meta", item);
  }), /*#__PURE__*/React.createElement("title", null, htmlMeta === null || htmlMeta === void 0 ? void 0 : htmlMeta.title), htmlMeta === null || htmlMeta === void 0 ? void 0 : (_htmlMeta$link = htmlMeta.link) === null || _htmlMeta$link === void 0 ? void 0 : _htmlMeta$link.map(function (item) {
    return /*#__PURE__*/React.createElement("link", item);
  }), htmlMeta === null || htmlMeta === void 0 ? void 0 : (_htmlMeta$javascript = htmlMeta.javascript) === null || _htmlMeta$javascript === void 0 ? void 0 : _htmlMeta$javascript.map(function (item) {
    return /*#__PURE__*/React.createElement("script", item);
  })), params.type == "hash" ? /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(ListenRouter, {
    routers: params.routers,
    listen: params.listen
  }), /*#__PURE__*/React.createElement(RoutersRecursion, params)) : /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(ListenRouter, {
    routers: params.routers,
    listen: params.listen
  }), /*#__PURE__*/React.createElement(RoutersRecursion, params)));
};
var ListenRouter = /*#__PURE__*/React.memo(function (_ref) {
  var routers = _ref.routers,
      listen = _ref.listen;
  var history = useHistory();

  var _useHtmlMeta = useHtmlMeta(),
      setHtmlMeta = _useHtmlMeta.setHtmlMeta;

  useEffect(function () {
    var count = 0;
    var flatRouter = routers;

    while (flatRouter.length > count) {
      var _flatRouter$count$chi;

      if ((_flatRouter$count$chi = flatRouter[count].child) !== null && _flatRouter$count$chi !== void 0 && _flatRouter$count$chi.length) {
        var _flatRouter$count$chi2;

        (_flatRouter$count$chi2 = flatRouter[count].child) === null || _flatRouter$count$chi2 === void 0 ? void 0 : _flatRouter$count$chi2.forEach(function (item) {
          flatRouter.push(item);
        });
      }

      count++;
    }

    history.listen(function (localtion) {
      var _res$, _res$$config;

      var res = flatRouter.filter(function (item) {
        return item.path === localtion.pathname;
      });
      setHtmlMeta((_res$ = res[0]) === null || _res$ === void 0 ? void 0 : (_res$$config = _res$.config) === null || _res$$config === void 0 ? void 0 : _res$$config.htmlmeta);
      listen && listen(localtion);
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
}, function () {
  return true;
});