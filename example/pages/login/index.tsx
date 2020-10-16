import React from "react";
import { useRoute } from "../../../src/Routers";

const Login = () => {
    const { meta } = useRoute();
    return <>{meta?.name}</>;
};


export default Login;