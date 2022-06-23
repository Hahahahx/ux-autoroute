import React, {
    FC,
    memo,
    ReactNode,
    useEffect,
    useMemo,
    useState,
} from "react";
import { createContext, useContext } from "react";
import { Helmet } from "react-helmet";

const HelmetContext = createContext(null);

type Headers = {
    id: string;
    component: ReactNode;
};
 
export const HelmetProvider = ({ children }) => {
    const [html, setHtml] = useState<Headers[]>([]);
    const [title, setTitle] = useState<string>("ux");

    const HTML = useMemo(() => {
        return (
            // @ts-ignore
            <Helmet>
                <title>{title}</title>
                {html.map((item) => {
                    return React.Children.map(item.component, (child: any) => {
                        return React.cloneElement(child, {
                            id: item.id,
                        });
                    });
                })}
            </Helmet>
        );
    }, [title, html]);

    return (
        <HelmetContext.Provider value={{ html, setHtml, setTitle }}>
            {HTML}
            {children}
        </HelmetContext.Provider>
    );
};

interface HelmetHook {
    html: Headers[];
    setHtml: React.Dispatch<React.SetStateAction<Headers[]>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const useHelmet = (title?: string): HelmetHook => {
    const hel = useContext(HelmetContext);

    useEffect(() => {
        title && hel.setTitle(title);
    }, []);

    return hel;
};
