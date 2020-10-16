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