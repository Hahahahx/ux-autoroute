import React, { createContext, ReactElement, FC, useContext } from "react";
import { RouterParams, RouteParams } from "./interface";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { LazyComponent } from "./LazyComponent";

export const RouterContext = createContext<{
    routes: Array<RouteParams>;
    meta?: any;
    router?: ReactElement;
}>({
    routes:[]
});

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
export const Routers: FC<RouterParams> = ({
    before,
    after,
    routers,
    noMatch,
}) => {
    // 寻找默认路由
    const defaultRouter = routers.find((item) => item.default && item.path);

    // 查找父级路由，重定位默认路由
    let fromPath: RegExpMatchArray | null | undefined | string =
        defaultRouter && defaultRouter.path.match(/\/[a-z]+/g);

    if (fromPath) {
        fromPath.pop();
        fromPath = fromPath.length ? fromPath.join("") : "/";
    }

    const { location } = window;

    return (
        <Switch>
            {routers.map(
                (route: RouteParams, index: number) =>
                    (
                        <Route
                            exact={!!route.exact}
                            path={route.path}
                            key={index}
                            render={() => {
                                if(before){
                                    const result =  before(location);
                                    if(result){
                                        return result
                                    }
                                }
                                return (
                                    <RouterContext.Provider
                                        value={{
                                            routes: route.child,
                                            meta: route.meta
                                                ? route.meta
                                                : null,
                                            router: route.child.length ? (
                                                <Routers
                                                    routers={route.child}
                                                    noMatch={noMatch}
                                                />
                                            ) : undefined,
                                        }}
                                    >
                                        <Component
                                            Component={route.component}
                                            componentPath={route.componentPath}
                                        />
                                        {after && after(location)}
                                    </RouterContext.Provider>
                                );
                            }}
                        />
                    )
            )}
            {defaultRouter && (
                <Redirect
                    exact
                    from={fromPath || "/"}
                    to={defaultRouter.path}
                />
            )}
            <Route path="/*" render={noMatch} />
        </Switch>
    );
};

const Component = ({
    componentPath,
    Component,
}: {
    componentPath: string;
    Component?: any;
}) => {
    return Component ? (
        <Component />
    ) : (
        <LazyComponent componentPath={componentPath} />
    );
};

/**
 * 对外暴露的子集路由
 */
export const RouterView = () => {
    const Router = useContext(RouterContext);
    return Router.router ? Router.router : <></>;
};

export const useRoute = () => {
    const Router = useContext(RouterContext);
    return Router
};
