import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Routers, useHtmlMeta } from "../lib";
import routeConfig from "./routeConfig";

const App = () => {
    const [userAuth, setAuth] = useState(2);
    const routeAuth = [["/tomato", "/potato"], ["/main"]];

    const setUserAuth = (num: number) => {
        return () => {
            setAuth(num);
        };
    };

    const getAuthName = (num?: number) => {
        switch (Number.isInteger(num) ? num : userAuth) {
            case 0:
                return "高级";
            case 1:
                return "中级";
            case 2:
                return "低级";
        }
    };

    return (
        <>
            <div>您的角色权限：{getAuthName()}</div>
            <div>
                <button onClick={setUserAuth(2)}>{getAuthName(2)}</button>
                <button onClick={setUserAuth(1)}>{getAuthName(1)}</button>
                <button onClick={setUserAuth(0)}>{getAuthName(0)}</button>
            </div>
            <Routers
                type="hash"
                listen={(listen:any) => {
                    // console.log(l);
                }}
                routers={routeConfig}
                before={(location:any) => {
                    // console.log(location);
                    const { hash } = window.location;
                    const result = routeAuth.some((item, index) => {
                        return item.some((route) => {
                            if (hash.includes(route)) {
                                return Number.isInteger(userAuth)
                                    ? // @ts-ignore
                                      userAuth > index
                                    : true;
                            }
                        });
                    });
                    if (result) {
                        return <>您无权访问</>;
                    }
                }}
                noMatch={<>404</>}
            />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
