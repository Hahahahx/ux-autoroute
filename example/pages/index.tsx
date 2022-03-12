import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../src";

const Index = () => {
    const { child } = useRouter();

    console.log("asdfadlkfjalkdj;lj;",child);

    return (
        <>
            <ul>
                <li> index</li>
                {child.map((item: any, index: any) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item?.path}</NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <RouterView noMatch={<Navigate to="login" />} />
            </div>
        </>
    );
};

export default Index;
