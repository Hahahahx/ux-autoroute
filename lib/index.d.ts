/// <reference types="react" />

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
    noMatch?: () => React.ReactElement | JSX.Element;
    before?: (location: Location) => void | JSX.Element | React.ReactElement;
    after?: (location: Location) => void;
}



declare module "ux-autoroute" {
    function Routers({}: RouterParams): JSX.Element;
    function LazyComponent({}: {
        componentPath: string;
        children: any;
    }): JSX.Element;
    function RouterView(): JSX.Element;
    function useRoute(): {
        routes: Array<RouteParams>;
        meta?: any;
        router?: React.ReactElement;
    };

    export { Routers, LazyComponent, RouterView, useRoute };
}
