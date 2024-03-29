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
import FireBlockTrxDetails from '../pages/wallets/fireblockLedgerDetails/FireBlockTrxDetails'
import FireBlockSavingsDetails from '../pages/wallets/fireblockLedgerDetails/FireBlockSavingsDetails'
import ChangeRole from '../pages/settings/ChangeRole'
import StellaBaxiLedgerDetails from '../pages/wallets/stellasbaxi/StellaBaxiLedgerDetails'
import Health from '../pages/health'

const routes = [
    // public Routes
    { path: '/', component: Login, ispublic: true },
    { path: '/health', component: Health, ispublic: true },
    { path: '/access', component: AccessPage, ispublic: true },
    { path: '/accesslogin', component: AccessLogin, ispublic: true },
    { path: '/2FA', component: TwoFactorAuthentication, ispublic: true },

    //private Routes
    { path: '/dashboard', component: Dashboard },
    { path: '/transactions', component: Transaction },
    { path: '/crypto', component: Crypto },
    { path: '/bills', component: Bills },
    { path: '/ledger', component: Wallets },
    { path: '/ledger/fireblockstransaction/:id', component: FireBlockTrxDetails },
    { path: '/ledger/fireblocksaving/:id', component: FireBlockSavingsDetails },
    { path: '/ledger/:id/details', component: StellaBaxiLedgerDetails },
    { path: '/cards', component: Card },
    { path: '/customers', component: Customers },
    { path: '/customers/:id', component: CustomersDetails },
    { path: '/settings', component: Settings },
    { path: '/settings/changerole/:id', component: ChangeRole },
]

export default routes
