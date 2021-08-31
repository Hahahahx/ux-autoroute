import React from "react";
import { useRouter } from "../../../../src";

const Potato = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Potato;
