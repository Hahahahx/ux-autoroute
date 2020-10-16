import React from "react";
import { useRoute } from "../../../../src/Routers";

const Tomato = () => {
    const { meta } = useRoute();
    return (
        <>
            {meta?.name}
        </>
    )
};

export default Tomato;
