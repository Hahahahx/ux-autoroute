/// <reference types="react" />

declare module "ux-autoroute" {
    /**
     * routers 路由映射表对象
     * noMatch 404
     * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
     * after 路由组件生成后触发
     */
    export interface RouterParams {
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
    export function Routers(routers: RouterParams): JSX.Element;

    /**
     * 子集路由映射组件
     */
    export function RouterView(): JSX.Element;
    /**
     * useRoute
     * 获取路由信息
     */
    export function useRouter(): {
        routes: Array<RouteParams>;
        meta?: any;
        router?: React.ReactElement;
    };

    export interface RouteParams {
        path: string;
        config?: RouteConfig;
        child: Array<RouteParams> | null;
        component?: any;
    }

    export interface RouteConfig {
        exact?: boolean;
        authority?: boolean;
        default?: boolean;
        noLazy?: boolean;
        meta?: { [k: string]: any };
    }

    export interface RouterContext {
        routers: Array<RouteParams>;
        config?: any;
        history?: History;
        router?: JSX.Element | React.ReactElement;
    }
}
