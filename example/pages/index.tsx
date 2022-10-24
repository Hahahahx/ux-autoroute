import React, { useEffect } from "react";
import { lazy } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../src";
import Potop from "./main/~potato/index";
import * as Any from "./main/~potato/index";

const Index = () => {
    const { child } = useRouter();

    return (
        <>
            <ul>
                <li> index</li>
                {child?.map((item: any, index: any) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item?.path}</NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <RouterView />
            </div>
        </>
    );
};

export default Index;

export const handles = {
    add: () => {
        console.log("sad");
    },
};
