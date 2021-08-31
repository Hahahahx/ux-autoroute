import React, { createContext, FC, useContext, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { RouterContext, useHtmlMeta } from "./common";

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
const Routers: FC<RouterRecursionParams> = ({
    before,
    after,
    routers,
    noMatch,
}) => {
    // 寻找默认路由
    const defaultRouter = routers.find(
        (item: RouteParams) => item.config?.default && item.path
    );

    // 查找父级路由，重定位默认路由
    let fromPath: RegExpMatchArray | null | undefined | string =
        defaultRouter && defaultRouter.path.match(/\/[a-z]+/g);

    if (fromPath) {
        fromPath.pop();
        fromPath = fromPath.length ? fromPath.join("") : "/";
    }

    return (
        <Switch>
            {routers.map((route: RouteParams, index: number) => (
                <Route
                    exact={!!route?.config?.exact}
                    path={route.path}
                    key={index}
                    render={() => {
                        if (before) {
                            const result = before(location);
                            if (result) {
                                return result;
                            }
                        }

                        return (
                            <RouterContext.Provider
                                value={{
                                    routers: route.child || [],
                                    config: route.config,
                                    router:
                                        route.child && route.child.length ? (
                                            <RoutersRecursion
                                                routers={route.child}
                                                noMatch={noMatch}
                                            />
                                        ) : undefined,
                                }}
                            >
                                <route.component />
                                {after && after(location)}
                            </RouterContext.Provider>
                        );
                    }}
                />
            ))}
            {defaultRouter && (
                <Redirect
                    exact
                    from={fromPath || "/"}
                    to={defaultRouter.path}
                />
            )}
            <Route
                path="/*"
                render={() => {
                    // console.log(routers);
                    const noMatchRouter = routers.find((item: RouteParams) =>
                        item.path.includes(location.pathname)
                    );

                    // console.log(noMatchRouter);
                    return noMatchRouter ? null : noMatch;
                }}
            />
        </Switch>
    );
};

export const RoutersRecursion = React.memo(Routers, (pre, next) => {
    // console.log(pre.routers);
    // console.log(next.routers);
    return false;
});
