import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/error/notfound';

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Dashboard, isPrivate: true },
    { path: '*', component: NotFound, isPrivate: true }
];

export default routes;