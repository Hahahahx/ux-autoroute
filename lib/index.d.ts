/// <reference types="react" />

import { LoadableComponent } from "@loadable/component";
import { NavigateFunction } from "react-router-dom";

declare module "ux-autoroute" {
    /// <reference types="react" />

    /**
     * routers 路由映射表对象
     * noMatch 404
     * before 访问路有前触发，如果结果返回了JSX对象的话则替换默认的路由组件
     * after 路由组件生成后触发
     */
    export interface RouterRecursionParams {
        unmount?: (
            params: RouteParams & { navigate: NavigateFunction }
        ) => void;
        mount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
        routers: Array<RouteParams>;
        noMatch?: React.ReactElement | JSX.Element | React.ReactNode;
        redirect?: React.ReactElement | JSX.Element | React.ReactNode;
        defaultRoute?: React.ReactElement | JSX.Element | React.ReactNode;
    }

    export type RouterParams = RouterRecursionParams & {
        type: "hash" | "history";
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

    export type RouterContextParams = RouteParams & RouterRecursionParams;

    export interface RouteParams {
        path: string;
        child?: Array<RouteParams> | null;
        element?: any;
    }
}
