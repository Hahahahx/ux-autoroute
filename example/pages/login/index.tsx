import React from "react";
import { useRouter } from "../../../lib/Routers";

const Login = () => {
    const { config } = useRouter();
    return <>{config?.meta?.name}</>;
};

export default Login;
