import {HeaderOnly} from '@/components/Layout'

import Home from '@/pages/Home'
import Following from '@/pages/Following'
import Upload from '@/pages/Upload'
import Search from '@/pages/Search'

export const publicRoutes = [
	{path: '/', component: Home},
	{path: 'following', component: Following},
	{path: 'profile', component: Following},
	//{path: 'upload', component: Upload, layout : null}
	{path: 'upload', component: Upload, layout : HeaderOnly},
	{path: 'search', component: Search, layout : null}
]

export const privateRoutes = [

]
