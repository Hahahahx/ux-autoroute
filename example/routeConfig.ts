import {lazy} from 'react';
import Page from './pages';
import * as PageHandles from './pages';
import PageDd from './pages/dd';
import * as PageDdHandles from './pages/dd';
import PageLogin from './pages/login!';
import * as PageLoginHandles from './pages/login!';
import PageMain from './pages/main';
import * as PageMainHandles from './pages/main';
import PageTest from './pages/test';
import * as PageTestHandles from './pages/test';
import PageMainTomato from './pages/main/tomato';
import * as PageMainTomatoHandles from './pages/main/tomato';
const PageMainPotato = lazy(() => import('./pages/main/~potato'));
import * as PageMainPotatoHandles from './pages/main/~potato';
import PageMainPotatoId from './pages/main/~potato/[id]';
import * as PageMainPotatoIdHandles from './pages/main/~potato/[id]';



const router=[
	{
		element: Page,
		handles: PageHandles.handles,
		relative: './pages',
		absolute: 'G:/JS/self/ux-autoroute/example/pages',
		path: '/',
		pathName: '',
		index: false,
		lazy: false,
		param: false,
		recursion: true,
		child: [
			{
				element: PageDd,
				handles: PageDdHandles.handles,
				relative: './pages/dd',
				absolute: 'G:/JS/self/ux-autoroute/example/pages/dd.tsx',
				path: '/dd',
				pathName: 'dd',
				index: false,
				lazy: false,
				param: false,
				recursion: false,
				child: null
			},
			{
				element: PageLogin,
				handles: PageLoginHandles.handles,
				relative: './pages/login!',
				absolute: 'G:/JS/self/ux-autoroute/example/pages/login!',
				path: '/login',
				pathName: 'login',
				index: true,
				lazy: false,
				param: false,
				recursion: true,
				child: null
			},
			{
				element: PageMain,
				handles: PageMainHandles.handles,
				relative: './pages/main',
				absolute: 'G:/JS/self/ux-autoroute/example/pages/main',
				path: '/main',
				pathName: 'main',
				index: false,
				lazy: false,
				param: false,
				recursion: true,
				child: [
					{
						element: PageMainTomato,
						handles: PageMainTomatoHandles.handles,
						relative: './pages/main/tomato',
						absolute: 'G:/JS/self/ux-autoroute/example/pages/main/tomato',
						path: '/main/tomato',
						pathName: 'tomato',
						index: false,
						lazy: false,
						param: false,
						recursion: true,
						child: null
					},
					{
						element: PageMainPotato,
						handles: PageMainPotatoHandles.handles,
						relative: './pages/main/~potato',
						absolute: 'G:/JS/self/ux-autoroute/example/pages/main/~potato',
						path: '/main/potato',
						pathName: 'potato',
						index: false,
						lazy: true,
						param: false,
						recursion: true,
						child: [
							{
								element: PageMainPotatoId,
								handles: PageMainPotatoIdHandles.handles,
								relative: './pages/main/~potato/[id]',
								absolute: 'G:/JS/self/ux-autoroute/example/pages/main/~potato/[id].tsx',
								path: '/main/potato/:id',
								pathName: ':id',
								index: false,
								lazy: false,
								param: true,
								recursion: false,
								child: null
							}
						]
					}
				]
			},
			{
				element: PageTest,
				handles: PageTestHandles.handles,
				relative: './pages/test',
				absolute: 'G:/JS/self/ux-autoroute/example/pages/test',
				path: '/test',
				pathName: 'test',
				index: false,
				lazy: false,
				param: false,
				recursion: true,
				child: null
			}
		]
	}
]

export default router;