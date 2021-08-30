import Page from './pages/index';
import PageMain from './pages/main/index';
import PageMainTomato from './pages/main/tomato/index';
import loadable from '@loadable/component';

const router=[
	{
		config: {
			meta: {
				name: '根'
			},
			noLazy: true
		},
		component: Page,
		path: '',
		child: [
			{
				config: {
					default: true,
					meta: {
						name: '登录'
					}
				},
				component: loadable(function(){return import('./pages/login')}),
				path: '/login',
				child: null
			},
			{
				config: {
					meta: {
						name: '首页'
					},
					noLazy: true
				},
				component: PageMain,
				path: '/main',
				child: [
					{
						config: {
							meta: {
								name: '土豆'
							}
						},
						component: loadable(function(){return import('./pages/main/potato')}),
						path: '/main/potato',
						child: null
					},
					{
						config: {
							meta: {
								name: '西红柿'
							},
							noLazy: true
						},
						component: PageMainTomato,
						path: '/main/tomato',
						child: null
					}
				]
			}
		]
	}
]

export default router