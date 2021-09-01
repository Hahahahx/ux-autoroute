import React from "react";
import { useRouter } from "../../../../lib";

const Potato = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Potato;
