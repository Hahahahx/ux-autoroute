import { ReactElement, CSSProperties } from "react";

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
