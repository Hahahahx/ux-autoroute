/// <reference types="react" />

import React from "react";
import {
    HashRouter,
    BrowserRouter,
    useRoutes,
    RouteObject,
    NavigateFunction,
} from "react-router-dom";
/**
 * routers 路由映射表对象
 * noMatch 404
 * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
 * after 路由组件生成后触发
 */
declare interface RouterRecursionParams {
    mainComponent?: React.ReactNode;
    unmount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    mount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    routers: Array<RouteParams>;
    noMatch?: React.ReactElement | JSX.Element | React.ReactNode;
    redirect?: React.ReactElement | JSX.Element | React.ReactNode;
    defaultRoute?: string;
}

declare type RouterParams = RouterRecursionParams & {
    type: "hash" | "history";
};

declare function Routers(params: RouterParams): JSX.Element;

/**
 * 路由组件，识别路由映射表
 * @param routers 路由映射表
 */
declare function RouterRecursion(routers: RouterRecursionParams): JSX.Element;

/**
 * 子集路由映射组件
 */
declare function RouterView(): JSX.Element;
/**
 * useRoute
 * 获取路由信息
 */
declare function useRouter(): RouterContextParams & { history: any };

declare function useHelmet(): HelmetHook;

declare interface RouteParams {
    element: any;
    RelativePath: string;
    AbsolutePath: string;
    path: string;
    pathName: string;
    index: boolean;
    lazy: boolean;
    param: boolean;
    recursion: boolean;
    child: Array<RouteParams> | null;
}

declare interface RouteConfig {
    exact?: boolean;
    authority?: boolean;
    default?: boolean;
    noLazy?: boolean;
    htmlmeta?: HtmlMetaConfig;
}

declare type RouterContextParams = RouteParams & RouterRecursionParams;

declare interface HelmetHook {
    html: Headers[];
    setHtml: React.Dispatch<React.SetStateAction<Headers[]>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}
