import loadable from '@loadable/component';
import Page from './pages/index';



          export const routeConfig = [
    {
        noLazy: true,
        meta: {
            name: '根目录'
        },
        child: [
            {
                default: true,
                meta: {
                    name: '登录'
                },
                child: [],
                component: loadable(function (){return import('./pages/login/index.tsx')}),
                path: '/login'
            },
            {
                meta: {
                    name: '首页'
                },
                child: [
                    {
                        meta: {
                            name: '土豆'
                        },
                        child: [],
                        component: loadable(function (){return import('./pages/main/potato/index.tsx')}),
                        path: '/main/potato'
                    },
                    {
                        meta: {
                            name: '西红柿'
                        },
                        child: [],
                        component: loadable(function (){return import('./pages/main/tomato/index.tsx')}),
                        path: '/main/tomato'
                    }
                ],
                component: loadable(function (){return import('./pages/main/index.tsx')}),
                path: '/main'
            }
        ],
        component: Page,
        path: ''
    }
]