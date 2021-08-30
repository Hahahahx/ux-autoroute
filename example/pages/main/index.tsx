import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../../lib/Routers";

const Main = () => {
    const { config, routers } = useRouter();
    return (
        <>
            {config?.mate?.name}
            <ul>
                {routers.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item?.config?.meta?.name}
                        </NavLink>
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
