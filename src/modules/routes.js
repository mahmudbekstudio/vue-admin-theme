import config from '../configs';
import defaultRoutes from './default/route';
import dashboard from './dashboard/route';
import login from './login/route';
import NotFound from './default/pages/not-found/NotFound.vue'

const routes = [
    { path: '/', redirect: { name: config.get('defaultPage') }},
    defaultRoutes,
    dashboard,
    login,
    {
        path: '*',
        name: 'not-found',
        component: NotFound
    }
];

export default routes;