import React, { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../src";
import { useHelmet } from "../../src/Helmet";

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
