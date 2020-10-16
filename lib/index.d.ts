import { ReactElement, CSSProperties, FC } from "react";

export interface RouteParams {
    meta?: { [k: string]: any };
    path: string;
    exact?: boolean;
    authority?: boolean;
    default?: boolean;
    noLazy?: boolean;
    child: Array<RouteParams>;
    componentPath: string;
    component?: any;
}


/**
 * routers 路由映射表对象
 * noMatch 404
 * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
 * after 路由组件生成后触发
 */
export interface RouterParams {
    routers: Array<RouteParams>;
    noMatch?: () => ReactElement | JSX.Element;
    before?: (location: Location) => void | JSX.Element | ReactElement;
    after?: (location: Location) => void;
}

declare var Routers:FC<RouterParams>
declare var LazyComponent:FC<{ componentPath: string }>

declare module "ux-autoroute"{
    export {Routers, LazyComponent}
}