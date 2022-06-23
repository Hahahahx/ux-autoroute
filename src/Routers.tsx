import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "./Helmet";
import { RoutersRecursion } from "./RoutersRecursion";
import { RouterParams } from "./type";

export const Routers = (params: RouterParams) => {
    const Router = params.type == "hash" ? HashRouter : BrowserRouter;

    return (
        <HelmetProvider>
            <Router>
                <RoutersRecursion {...params} />
            </Router>
        </HelmetProvider>
    );
};
