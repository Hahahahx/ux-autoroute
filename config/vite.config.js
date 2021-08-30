import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { AutoRouterVitePlugin } from "ux-autoroute-plugin"
// const plugin = require("../lib/plugin")

// https://vitejs.dev/config/
export default defineConfig({
    root: "../example",
    plugins: [
        reactRefresh(),
        legacy({ targets: ["defaults", "not IE 11"] }),
        AutoRouterVitePlugin({
            pagePath: path.join(__dirname, "../example/pages"),
            output: path.join(__dirname, "../example"),
            filename: "routeConfig.ts",
        }),
    ],
    // server:{
    //   proxy:{
    //     '/api':{
    //       target:"https://jim.jx.cn/design",
    //       rewrite:(path)=>{
    //         return path.replace(/^\/api/, '')
    //       },
    //       changeOrigin:true,

    //     }
    //   }
    // }
});
