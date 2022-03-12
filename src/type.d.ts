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
    unmount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    mount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    routers: Array<RouteParams>;
    noMatch?: React.ReactElement | JSX.Element | React.ReactNode;
    redirect?: React.ReactElement | JSX.Element | React.ReactNode;
    defaultRoute?: React.ReactElement | JSX.Element | React.ReactNode;
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

declare interface RouteParams {
    path: string;
    child?: Array<RouteParams> | null;
    element?: any;
}

declare interface RouteConfig {
    exact?: boolean;
    authority?: boolean;
    default?: boolean;
    noLazy?: boolean;
    htmlmeta?: HtmlMetaConfig;
}

declare type RouterContextParams = RouteParams & RouterRecursionParams;

declare type HtmlMetaContextParams = {
    htmlMeta?: HtmlMetaConfig;
    setHtmlMeta: (htmlMeta: HtmlMetaConfig | undefined) => void;
};

declare interface HtmlMetaConfig {
    link: HtmlLinkAttr[];
    meta: HtmlMetaAttr[];
    javascript: HtmlJavaScriptAttr[];
    title: string;
    [k: string]: any;
}

declare interface HtmlMetaAttr {
    name: string;
    content: string;
    [k: string]: any;
}

declare interface HtmlLinkAttr {
    rel: string;
    href: string;
    [k: string]: any;
}

declare interface HtmlJavaScriptAttr {
    src: string;
    [k: string]: any;
}

declare interface RouterViewProps {
    mainComponent?: React.ReactNode;
}
