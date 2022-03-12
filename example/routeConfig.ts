import Page from './pages/index';
import PageLogin from './pages/login/index';
import PageMain from './pages/main/index';
import PageMainPotato from './pages/main/potato/index';
import PageMainTomato from './pages/main/tomato/index';
import loadable from '@loadable/component';

const router=[
	{
		config: null,
		element: Page,
		path: '',
		index: false,
		child: [
			{
				config: null,
				element: PageLogin,
				path: '/login',
				index: false,
				child: null
			},
			{
				config: null,
				element: PageMain,
				path: '/main',
				index: false,
				child: [
					{
						config: null,
						element: PageMainPotato,
						path: '/main/potato',
						index: false,
						child: null
					},
					{
						config: null,
						element: PageMainTomato,
						path: '/main/tomato',
						index: false,
						child: null
					}
				]
			}
		]
	}
]

export default router;