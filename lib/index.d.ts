/// <reference types="react" />

declare module "ux-autoroute" {
    interface RouteParams {
        meta?: { [k: string]: any };
        path: string;
        exact?: boolean;
        authority?: boolean;
        default?: boolean;
        noLazy?: boolean;
        child: Array<RouteParams>;
        component?: any;
    }

    /**
     * routers 路由映射表对象
     * noMatch 404
     * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
     * after 路由组件生成后触发
     */
    interface RouterParams {
        routers: Array<RouteParams>;
        noMatch?: () => React.ReactElement | JSX.Element;
        before?: (
            location: Location
        ) => void | JSX.Element | React.ReactElement;
        after?: (location: Location) => void;
    }

    /**
     * 路由组件，识别路由映射表
     * @param routers 路由映射表
     */
    function Routers(routers: RouterParams): JSX.Element;

    /**
     * 子集路由映射组件
     */
    function RouterView(): JSX.Element;
    /**
     * useRoute
     * 获取路由信息
     */
    function useRoute(): {
        routes: Array<RouteParams>;
        meta?: any;
        router?: React.ReactElement;
    };

    export { Routers, RouterView, useRoute };
}
