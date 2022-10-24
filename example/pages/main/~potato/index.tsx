import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "../../../../src";

const Potato = () => {
    const { child } = useRouter();
    // return <>{config?.htmlmeta?.title}</>
    return (
        <>
            {"potatp"}

            {child?.map((item: any, index: any) => (
                <li key={index}>
                    <NavLink to={item.path}>{item?.path}</NavLink>
                </li>
            ))}

            <RouterView />
        </>
    );
};

export default Potato;
export const Unmount = () => {
    return "dsf";
};
