import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import "core-js/modules/es.array.find.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouterContext } from "./common";
/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */

var Routers = function Routers(_ref) {
  var before = _ref.before,
      after = _ref.after,
      routers = _ref.routers,
      noMatch = _ref.noMatch;
  // 寻找默认路由
  var defaultRouter = routers.find(function (item) {
    var _item$config;

    return ((_item$config = item.config) === null || _item$config === void 0 ? void 0 : _item$config.default) && item.path;
  }); // 查找父级路由，重定位默认路由

  var fromPath = defaultRouter && defaultRouter.path.match(/\/[a-z]+/g);

  if (fromPath) {
    fromPath.pop();
    fromPath = fromPath.length ? fromPath.join("") : "/";
  }

  return /*#__PURE__*/React.createElement(Switch, null, routers.map(function (route, index) {
    var _route$config;

    return /*#__PURE__*/React.createElement(Route, {
      exact: !!(route !== null && route !== void 0 && (_route$config = route.config) !== null && _route$config !== void 0 && _route$config.exact),
      path: route.path,
      key: index,
      render: function render() {
        if (before) {
          var result = before(location);

          if (result) {
            return result;
          }
        }

        return /*#__PURE__*/React.createElement(RouterContext.Provider, {
          value: _objectSpread(_objectSpread({}, route), {}, {
            router: route.child && route.child.length ? /*#__PURE__*/React.createElement(RoutersRecursion, {
              routers: route.child,
              noMatch: noMatch
            }) : undefined
          })
        }, /*#__PURE__*/React.createElement(route.component, null), after && after(location));
      }
    });
  }), defaultRouter && /*#__PURE__*/React.createElement(Redirect, {
    exact: true,
    from: fromPath || "/",
    to: defaultRouter.path
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/*",
    render: function render() {
      // console.log(routers);
      var noMatchRouter = routers.find(function (item) {
        return item.path.includes(location.pathname);
      }); // console.log(noMatchRouter);

      return noMatchRouter ? null : noMatch;
    }
  }));
};

export var RoutersRecursion = /*#__PURE__*/React.memo(Routers, function (pre, next) {
  // console.log(pre.routers);
  // console.log(next.routers);
  return false;
});