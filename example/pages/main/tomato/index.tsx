import React from "react";
import { useRouter } from "../../../../src";

const Tomato = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Tomato;
