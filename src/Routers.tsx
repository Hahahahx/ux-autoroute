import React from "react";
import {
    HashRouter,
    BrowserRouter,
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { RoutersRecursion } from "./RoutersRecursion";
import { RouterParams } from "./type";

export const Routers = (params: RouterParams) => {
    const Router = params.type == "hash" ? HashRouter : BrowserRouter;
    console.log(params)

    return (
        <RouterProvider
            router={createBrowserRouter(RoutersRecursion({ ...params }))}
        />
    );
};
