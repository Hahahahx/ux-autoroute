import React from "react";
import { useRouter } from "../../../../lib/Routers";

const Tomato = () => {
    const { config } = useRouter();
    return <>{config?.meta?.name}</>;
};

export default Tomato;
