import React, { FC, useEffect } from "react";
import { NavigateFunction, Route, useNavigate } from "react-router-dom";
import { RouterContext } from "./common";
import { RouteParams, RouterRecursionParams } from "./type";

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
const Routers = ({
    mount,
    unmount,
    routers,
    noMatch,
}: RouterRecursionParams) => {
    return routers.map((route: RouteParams, index: number) => {
        console.log(route.handle);
        return {
            path: route.pathName,
            element: (
                <Router
                    route={route}
                    unmount={unmount}
                    mount={mount}
                    noMatch={noMatch}
                />
            ),
            errorElement: noMatch,
            index: route.index,
            children: route.child
                ? Routers({
                      mount,
                      unmount,
                      noMatch,
                      routers: route.child,
                  })
                : null,
        };
    });
};

export const RoutersRecursion = Routers;

interface RouterProps {
    route: RouteParams;
    unmount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    mount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
    noMatch?: React.ReactElement | JSX.Element | React.ReactNode;
}

const Router = ({ route, mount, unmount, noMatch }: RouterProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        mount &&
            mount({
                ...route,
                navigate,
            });
        return () => {
            unmount &&
                unmount({
                    ...route,
                    navigate,
                });
        };
    }, []);

    return (
        <RouterContext.Provider
            value={{
                ...route,
                noMatch: noMatch,
                mount: mount,
                unmount: unmount,
            }}
        >
            {React.createElement(route.element)}
        </RouterContext.Provider>
    );
};
