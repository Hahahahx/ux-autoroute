import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useState,
} from "react";
import { Helmet } from "react-helmet";
import { HashRouter, BrowserRouter, useHistory } from "react-router-dom";
import { HtmlMetaContext, useHtmlMeta } from "./common";
import { RoutersRecursion } from "./RoutersRecursion";

export const Routers = (params: RouterParams) => {
    const [htmlMeta, setHtmlMeta] = useState<HtmlMetaConfig | undefined>({
        link: new Array<HtmlLinkAttr>(),
        meta: new Array<HtmlMetaAttr>(),
        title: "",
        javascript: new Array<HtmlJavaScriptAttr>(),
    });

    return (
        <HtmlMetaContext.Provider value={{ htmlMeta, setHtmlMeta }}>
            <Helmet>
                {htmlMeta?.meta?.map((item) => (
                    <meta {...item} />
                ))}
                <title>{htmlMeta?.title}</title>
                {htmlMeta?.link?.map((item) => (
                    <link {...item} />
                ))}
                {htmlMeta?.javascript?.map((item) => (
                    <script {...item} />
                ))}
            </Helmet>

            {params.type == "hash" ? (
                <HashRouter>
                    <ListenRouter
                        routers={params.routers}
                        listen={params.listen}
                    />
                    <RoutersRecursion {...params} />
                </HashRouter>
            ) : (
                <BrowserRouter>
                    <ListenRouter
                        routers={params.routers}
                        listen={params.listen}
                    />
                    <RoutersRecursion {...params} />
                </BrowserRouter>
            )}
        </HtmlMetaContext.Provider>
    );
};

const ListenRouter = React.memo(
    ({
        routers,
        listen,
    }: {
        routers: RouteParams[];
        listen?: (l: any) => any;
    }) => {
        const history = useHistory();
        const { setHtmlMeta } = useHtmlMeta();

        useEffect(() => {
            let count = 0;
            const flatRouter: any[] = routers;
            while (flatRouter.length > count) {
                if (flatRouter[count].child?.length) {
                    flatRouter[count].child?.forEach((item: any) => {
                        flatRouter.push(item);
                    });
                }
                count++;
            }

            history.listen((localtion) => {
                const res = flatRouter.filter(
                    (item) => item.path === localtion.pathname
                );
                setHtmlMeta(res[0]?.config?.htmlmeta);
                listen && listen(localtion);
            });
        }, []);
        return <></>;
    },
    () => true
);
