import React, { FC, useEffect } from "react";
import { Route, RouteObject, Routes, useNavigate } from "react-router-dom";
import { RouterContext } from "./common";
import { RouteParams, RouterRecursionParams } from "./type";

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
const Routers: FC<RouterRecursionParams> = ({
    mount,
    unmount,
    routers,
    noMatch,
    defaultRoute,
    redirect,
}) => {
    return (
        <Routes>
            {routers.map((route: RouteParams, index: number) => {
                const lastPath = route.path.split("/").pop();
                const hasChild = route.child ? "/*" : "";
                const path = lastPath + hasChild;
                return (
                    <Route
                        key={index}
                        path={path}
                        {...{
                            element: (
                                <Router
                                    path={route.path}
                                    child={route.child}
                                    redirect={redirect}
                                    unmount={unmount}
                                    mount={mount}
                                    router={route.element}
                                    noMatch={noMatch}
                                />
                            ),
                        }}
                    />
                );
            })}
            <Route path="*" element={noMatch} />
        </Routes>
    );
};

export const RoutersRecursion = React.memo(Routers, (pre, next) => {
    return false;
});

const Router = ({
    path,
    mount,
    unmount,
    router,
    redirect,
    child,
    noMatch,
}: any) => {
    const navigate = useNavigate();

    useEffect(() => {
        mount &&
            mount({
                path,
                child,
                navigate,
            });
        return () => {
            unmount &&
                unmount({
                    path,
                    child,
                    navigate,
                });
        };
    }, [path]);

    if (redirect) {
        return redirect;
    }

    const Compoennt = router;

    return (
        <RouterContext.Provider
            value={{
                path,
                routers: child,
                child,
                noMatch: noMatch,
                redirect: redirect,
                mount: mount,
                unmount: unmount,
            }}
        >
            {React.createElement(router)}
            {/* <Compoennt /> */}
        </RouterContext.Provider>
    );
};
