import React from "react";
import { useRouter } from "../../../src";

const Login = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Login;
