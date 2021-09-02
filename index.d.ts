/// <reference types="react" />

declare module "ux-autoroute" {
    /// <reference types="react" />

    /**
     * routers 路由映射表对象
     * noMatch 404
     * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
     * after 路由组件生成后触发
     */
    export interface RouterRecursionParams {
        routers: Array<RouteParams>;
        noMatch?: React.ReactElement | JSX.Element;
        before?: (
            location: any & Location
        ) => void | JSX.Element | React.ReactElement;
        after?: (location: any & Location) => void;
    }

    export type RouterParams = RouterRecursionParams & {
        type: "hash" | "history";
        listen?: (listener: any) => any;
    };

    export function Routers(params: RouterParams): JSX.Element;

    /**
     * 路由组件，识别路由映射表
     * @param routers 路由映射表
     */
    export function RouterRecursion(
        routers: RouterRecursionParams
    ): JSX.Element;

    /**
     * 子集路由映射组件
     */
    export function RouterView(): JSX.Element;
    /**
     * useRoute
     * 获取路由信息
     */
    export function useRouter(): RouterContextParams & { history: any };

    /**
     * 获取meta信息
     */
    export function useHtmlMeta(): HtmlMeta;

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
        htmlmeta?: HtmlMetaConfig;
    }

    export interface RouterContextParams {
        routers: Array<RouteParams>;
        config?: RouteConfig;
        router?: JSX.Element | React.ReactElement;
    }

    export type HtmlMeta = HtmlMetaContextParams;

    export type HtmlMetaContextParams = {
        htmlMeta?: HtmlMetaConfig;
        setHtmlMeta: (htmlMeta: HtmlMetaConfig | undefined) => void;
    };

    export interface HtmlMetaConfig {
        link: HtmlLinkAttr[];
        meta: HtmlMetaAttr[];
        javascript: HtmlJavaScriptAttr[];
        title: string;
        [k: string]: any;
    }

    export interface HtmlMetaAttr {
        name: string;
        content: string;
        [k: string]: any;
    }

    export interface HtmlLinkAttr {
        rel: string;
        href: string;
        [k: string]: any;
    }

    export interface HtmlJavaScriptAttr {
        src: string;
        [k: string]: any;
    }
}
