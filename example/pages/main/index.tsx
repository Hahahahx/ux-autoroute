import React from "react";
import { lazy } from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../../src";

const Main = () => {
    const { child } = useRouter();

    console.log(child);
 
    return (
        <>
            <ul>
                <li> main</li>
                {child?.map((item: any, index: any) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item?.path}</NavLink>
                    </li>
                ))}
            </ul>
            <div>
                {/* <Suspense> */}
                <RouterView defaultRoute={"/main/potato"} />
                {/* </Suspense> */}
            </div>
        </>
    );
};

export default Main;
