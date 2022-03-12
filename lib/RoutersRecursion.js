import "core-js/modules/es.array.map.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.split.js";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RouterContext } from "./common";

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
var Routers = function Routers(_ref) {
  var mount = _ref.mount,
      unmount = _ref.unmount,
      routers = _ref.routers,
      noMatch = _ref.noMatch,
      defaultRoute = _ref.defaultRoute,
      redirect = _ref.redirect;
  return /*#__PURE__*/React.createElement(Routes, null, routers.map(function (route, index) {
    var lastPath = route.path.split("/").pop();
    var hasChild = route.child ? "/*" : "";
    var path = lastPath + hasChild;
    return /*#__PURE__*/React.createElement(Route, {
      key: index,
      path: path,
      element: /*#__PURE__*/React.createElement(Router, {
        path: route.path,
        child: route.child,
        redirect: redirect,
        unmount: unmount,
        mount: mount,
        router: route.element,
        noMatch: noMatch
      })
    });
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: noMatch
  }));
};

export var RoutersRecursion = /*#__PURE__*/React.memo(Routers, function (pre, next) {
  return false;
});

var Router = function Router(_ref2) {
  var path = _ref2.path,
      mount = _ref2.mount,
      unmount = _ref2.unmount,
      router = _ref2.router,
      redirect = _ref2.redirect,
      child = _ref2.child,
      noMatch = _ref2.noMatch;
  var navigate = useNavigate();
  useEffect(function () {
    mount && mount({
      path: path,
      child: child,
      navigate: navigate
    });
    return function () {
      unmount && unmount({
        path: path,
        child: child,
        navigate: navigate
      });
    };
  }, [path]);

  if (redirect) {
    return redirect;
  }

  var Compoennt = router;
  return /*#__PURE__*/React.createElement(RouterContext.Provider, {
    value: {
      path: path,
      routers: child,
      child: child,
      noMatch: noMatch,
      redirect: redirect,
      mount: mount,
      unmount: unmount
    }
  }, /*#__PURE__*/React.createElement(router));
};