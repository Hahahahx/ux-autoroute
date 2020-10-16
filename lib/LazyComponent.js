import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import React from "react";
import loadable from "@loadable/component";
var Async = loadable(function (props) {
  return import("@/".concat(props.componentPath));
});
/**
 * 懒加载组件
 * @param componentPath
 * @constructor
 */

export var LazyComponent = function LazyComponent(_ref) {
  var componentPath = _ref.componentPath;
  return /*#__PURE__*/React.createElement(Async, {
    componentPath: componentPath
  });
};