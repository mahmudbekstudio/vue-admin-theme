import Default from './pages/default/Default.vue';
import Login from './pages/login/Login.vue';
import Register from './pages/register/Register.vue';
import ForgetPassword from './pages/forget-password/ForgetPassword.vue'

const route = {
    path: '/',
    component: Default,
    children: [
        {
            path: 'login',
            name: 'default-login',
            component: Login
        },
        {
            path: 'register',
            name: 'default-register',
            component: Register
        },
        {
            path: 'forget-password',
            name: 'default-forget-password',
            component: ForgetPassword
        }
    ]
};

export default route;