import React from "react";
import { useRouter } from "../../../../lib/Routers";

const Potato = () => {
    const { config } = useRouter();
    return <>{config?.meta?.name}</>;
};

export default Potato;
