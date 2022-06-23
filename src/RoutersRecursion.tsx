import React, { FC, useEffect } from "react";
import {
    Navigate,
    Route,
    RouteObject,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
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
    let location = useLocation();

    // 如果/main 存在子路由 /main/a,/main/b
    // 那么进入/main时会先过滤前面的 a,b 然后到*
    // 问题根源在于Route组件的index配置是无效的
    // 所以我们需要手动的配置默认的路由
    // 同时我们还可以具备未匹配的路由跳转404

    // 有默认路由则跳到默认路由去，否则跳到404
    const to =
        defaultRoute && defaultRoute.includes(location.pathname) ? (
            <Navigate to={defaultRoute} replace />
        ) : (
            noMatch
        );

    return (
        <Routes>
            {routers.map((route: RouteParams, index: number) => {
                const lastPath = route.path.split("/").pop();
                const hasChild = route.child ? "/*" : "";
                const path = lastPath + hasChild;
                console.log(
                    defaultRoute === route.path,
                    defaultRoute,
                    route.path
                );
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
            <Route path="*" element={to} />
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
        </RouterContext.Provider>
    );
};
