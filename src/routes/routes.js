import Login from '../pages/auth/login'
import Dashboard from '../pages/dashboard'
import Bills from '../pages/bills/Bills'
import Card from '../pages/card/Card'
import Customers from '../pages/customers/Customers'
import Crypto from '../pages/crypto/Crypto'
import Settings from '../pages/settings/Settings'
import Transaction from '../pages/transactions/Transaction'
import Wallets from '../pages/wallets/Wallets'
import AccessPage from '../pages/auth/access'
import AccessLogin from '../pages/auth/accessLogin/AccessLogin'
import CustomersDetails from '../pages/customers/CustomersDetails'
import TwoFactorAuthentication from '../pages/auth/2fa'

const routes = [
    // public Routes
    { path: '/', component: Login, ispublic: true },
    { path: '/access', component: AccessPage, ispublic: true },
    { path: '/accesslogin', component: AccessLogin, ispublic: true },
    { path: '/2FA', component: TwoFactorAuthentication, ispublic: true },

    //private Routes
    { path: '/dashboard', component: Dashboard },
    { path: '/transactions', component: Transaction },
    { path: '/crypto', component: Crypto },
    { path: '/bills', component: Bills },
    { path: '/wallets', component: Wallets },
    { path: '/cards', component: Card },
    { path: '/customers', component: Customers },
    { path: '/customers/:id', component: CustomersDetails },
    { path: '/settings', component: Settings },
]

export default routes
