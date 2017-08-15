import ProductListContainer from '../app/products/ProductListContainer';
import Login from '../app/login/Login';
import UserAccount from '../app/account/UserAccount';

const createRoutes = () => {
    return [{
        path: '/',
        component: ProductListContainer
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/account',
        component: UserAccount
    }]
}

export default createRoutes