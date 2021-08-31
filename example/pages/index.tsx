import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../src";

const Index = () => {
    const { config, routers, history } = useRouter();

    // console.log(routers);

    return (
        <>
            <ul>
                <li> {config?.htmlmeta?.title}</li>
                {routers.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item?.config?.htmlmeta?.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div>
                {history.location.pathname != "/main"}
                <RouterView />
            </div>
        </>
    );
};

export default Index;
