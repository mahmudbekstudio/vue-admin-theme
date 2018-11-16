import config from '../configs';
import defaultRoutes from './default/route';
import dashboard from './dashboard/route';

const routes = [
    { path: '/', redirect: { name: config.get('defaultPage') } },
    defaultRoutes,
    dashboard,
    { path: '*', redirect: { name: config.get('notFound') } }
];

export default routes;