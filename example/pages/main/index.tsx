import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRoute } from "../../../src/Routers";

const Main = () => {
    const { meta, routes } = useRoute();
    return (
        <>
            {meta?.name}
            <ul>
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

export default Main;
