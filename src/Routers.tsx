import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { RoutersRecursion } from "./RoutersRecursion";
import { RouterParams } from "./type";

export const Routers = (params: RouterParams) => {
    const Router = params.type == "hash" ? HashRouter : BrowserRouter;

    return (
        <Router>
            <RoutersRecursion {...params} />
        </Router>
    );
};
