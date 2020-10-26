import "core-js/modules/es.array.find";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.match";
import React, { createContext, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
export var RouterContext = /*#__PURE__*/createContext({
  routes: []
});
/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */

export var Routers = function Routers(_ref) {
  var before = _ref.before,
      after = _ref.after,
      routers = _ref.routers,
      noMatch = _ref.noMatch;
  // 寻找默认路由
  var defaultRouter = routers.find(function (item) {
    return item.default && item.path;
  }); // 查找父级路由，重定位默认路由

  var fromPath = defaultRouter && defaultRouter.path.match(/\/[a-z]+/g);

  if (fromPath) {
    fromPath.pop();
    fromPath = fromPath.length ? fromPath.join("") : "/";
  }

  var _window = window,
      location = _window.location;
  return /*#__PURE__*/React.createElement(Switch, null, routers.map(function (route, index) {
    return /*#__PURE__*/React.createElement(Route, {
      exact: !!route.exact,
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
            routes: route.child,
            meta: route.meta ? route.meta : null,
            router: route.child.length ? /*#__PURE__*/React.createElement(Routers, {
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
    render: noMatch
  }));
};
/**
 * 对外暴露的子集路由
 */

export var RouterView = function RouterView() {
  var Router = useContext(RouterContext);
  return Router.router ? Router.router : /*#__PURE__*/React.createElement(React.Fragment, null);
};
export var useRoute = function useRoute() {
  var Router = useContext(RouterContext);
  return Router;
};