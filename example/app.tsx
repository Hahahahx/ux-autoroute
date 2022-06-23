import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, useNavigate } from "react-router-dom";
import { Routers } from "../src";
import Index from "./pages";
import { createRoot } from "react-dom/client";
import routeConfig from "./routeConfig";
const App = () => {
    const [userAuth, setAuth] = useState(false);
    const routeAuth = ["/tomato", "/potato", "/main"];

    return (
        <>
            <div>您的角色权限：{userAuth ? "登录" : "未登录"}</div>
            <div>
                <button onClick={() => setAuth(!userAuth)}>
                    {!userAuth ? "登录" : "退出登录"}
                </button>
            </div>
            <Routers
                type="hash"
                routers={routeConfig}
                mount={({ path, navigate }) => {
                    console.log(userAuth);
                    if (routeAuth.includes(path) && !userAuth) {
                        navigate("/login");
                    }
                }}
                noMatch={<>404</>}
            />
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
