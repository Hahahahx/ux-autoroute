/// <reference types="react" />

/**
 * routers 路由映射表对象
 * noMatch 404
 * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
 * after 路由组件生成后触发
 */
declare interface RouterParams {
    routers: Array<RouteParams>;
    noMatch?: () => React.ReactElement | JSX.Element;
    before?: (
        location: any & Location
    ) => void | JSX.Element | React.ReactElement;
    after?: (location: any & Location) => void;
}

/**
 * 路由组件，识别路由映射表
 * @param routers 路由映射表
 */
declare function Routers(routers: RouterParams): JSX.Element;

/**
 * 子集路由映射组件
 */
declare function RouterView(): JSX.Element;
/**
 * useRoute
 * 获取路由信息
 */
declare function useRouter(): {
    routes: Array<RouteParams>;
    meta?: any;
    router?: React.ReactElement;
};

declare interface RouteParams {
    path: string;
    config?: RouteConfig;
    child: Array<RouteParams> | null;
    component?: any;
}

declare interface RouteConfig {
    exact?: boolean;
    authority?: boolean;
    default?: boolean;
    noLazy?: boolean;
    meta?: { [k: string]: any };
}

declare interface RouterContext {
    routers: Array<RouteParams>;
    config?: any;
    history?: History;
    router?: JSX.Element | React.ReactElement;
}
