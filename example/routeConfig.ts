import Page from '@/pages/index';
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
                componentPath: 'pages/login/index.tsx',
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
                        componentPath: 'pages/main/potato/index.tsx',
                        path: '/main/potato'
                    },
                    {
                        meta: {
                            name: '西红柿'
                        },
                        child: [],
                        componentPath: 'pages/main/tomato/index.tsx',
                        path: '/main/tomato'
                    }
                ],
                componentPath: 'pages/main/index.tsx',
                path: '/main'
            }
        ],
        componentPath: 'pages/index.tsx',
        path: '',
        component: Page
    }
]