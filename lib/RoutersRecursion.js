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
          value: {
            routers: route.child || [],
            config: route.config,
            router: route.child && route.child.length ? /*#__PURE__*/React.createElement(RoutersRecursion, {
              routers: route.child,
              noMatch: noMatch
            }) : undefined
          }
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