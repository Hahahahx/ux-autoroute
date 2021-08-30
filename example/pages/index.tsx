import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../lib/Routers";

const Index = () => {
    const { config, routers, history } = useRouter();

    console.log(routers)

    return (
        <>
            <ul>
                <li> {config?.meta?.name}</li>
                {routers.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item?.config?.meta?.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div>
                {
                    history.location.pathname != "/main"
                }
                <RouterView />
            </div>
        </>
    );
};

export default Index;
