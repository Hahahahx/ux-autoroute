import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  var location = useLocation(); // 如果/main 存在子路由 /main/a,/main/b
  // 那么进入/main时会先过滤前面的 a,b 然后到*
  // 问题根源在于Route组件的index配置是无效的
  // 所以我们需要手动的配置默认的路由
  // 同时我们还可以具备未匹配的路由跳转404
  // 有默认路由则跳到默认路由去，否则跳到404

  var to = defaultRoute && defaultRoute.includes(location.pathname) ? /*#__PURE__*/React.createElement(Navigate, {
    to: defaultRoute,
    replace: true
  }) : noMatch;
  return /*#__PURE__*/React.createElement(Routes, null, routers.map(function (route, index) {
    var lastPath = route.path.split("/").pop();
    var hasChild = route.child ? "/*" : "";
    var path = lastPath + hasChild;
    console.log(defaultRoute === route.path, defaultRoute, route.path);
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
    element: to
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