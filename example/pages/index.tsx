import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRoute } from "../../src/Routers";

const Index = () => {
    const { meta, routes } = useRoute();
    return (
        <>
            <ul>
                <li> {meta?.name}</li>
                {routes.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item.meta?.name}</NavLink>
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
