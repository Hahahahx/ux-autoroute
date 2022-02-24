import React, { createContext, FC, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const RouterContext = createContext<RouterContextParams>({
    path: "",
    child: [],
});

/**
 * 对外暴露的子集路由
 */
export const RouterView: FC<RouterViewProps> = ({ mainComponent }) => {
    const Router = useContext(RouterContext);
    const location = useLocation();

    if (mainComponent && location.pathname === Router.path) {
        return <>{mainComponent}</>;
    }

    return Router.router ? Router.router : <></>;
};

export const useRouter = (): RouterContextParams & { history: any } => {
    const history = useHistory();
    const router = useContext(RouterContext);
    return { ...router, history };
};

export const HtmlMetaContext = createContext<HtmlMetaContextParams>({
    htmlMeta: {
        link: new Array<HtmlLinkAttr>(),
        meta: new Array<HtmlMetaAttr>(),
        title: "",
        javascript: new Array<HtmlJavaScriptAttr>(),
    },
    setHtmlMeta: () => {},
});

export const useHtmlMeta = () => {
    return useContext(HtmlMetaContext);
};
