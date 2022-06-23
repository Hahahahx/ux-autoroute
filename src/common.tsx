import React, { createContext, FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { RoutersRecursion } from "./RoutersRecursion";
import { RouterContextParams, RouterRecursionParams } from "./type";

export const RouterContext = createContext<RouterContextParams>({
    path: "",
    child: [],
    routers: [],
    unmount: () => {},
    mount: () => {},
});

/**
 * 对外暴露的子集路由
 */
export const RouterView: FC<Partial<RouterRecursionParams>> = ({
    ...props
}) => {
    const Router = useContext(RouterContext);

    const location = useLocation();

    if (props.mainComponent && location.pathname === Router.path) {
        return props.mainComponent as any;
    }

    if (Router.routers && Router.routers.length) {
        return <RoutersRecursion {...{ ...Router, ...props }} />;
    }

    return <></>;
};

export const useRouter = (): RouterContextParams => {
    const router = useContext(RouterContext);
    return { ...router };
};
