import config from '../configs'
import dashboard from './dashboard/route'
import login from './login/route'

const routes = [
    { path: '/', redirect: { name: config.get('defaultPage') }},
    dashboard,
    login
];

export default routes;