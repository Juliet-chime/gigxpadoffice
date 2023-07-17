import Login from "../pages/auth/login"
import Dashboard from "../pages/dashboard"
import Bills from "../pages/bills/Bills"
import Card from "../pages/card/Card"
import Customers from "../pages/customers/Customers"
import Crypto from "../pages/crypto/Crypto"
import Settings from "../pages/settings/Settings"
import Transaction from "../pages/transactions/Transaction"
import Wallets from "../pages/wallets/Wallets"

const routes = [
    // public Routes
    { path: '/', component: Login, ispublic: true },

    //private Routes
    { path: '/dashboard', component: Dashboard},
    { path: '/transactions', component: Transaction},
    { path: '/crypto', component: Crypto},
    { path: '/bills', component: Bills},
    { path: '/wallets', component: Wallets},
    { path: '/card', component: Card},
    { path: '/customers', component: Customers},
    { path: '/settings', component: Settings}
]

export default routes