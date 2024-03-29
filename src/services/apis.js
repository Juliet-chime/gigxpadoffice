//auth urls
const loginUser = () => {
    return `/auth/login`
}

const setPassword = () => {
    return `/auth/set-password`
}

const twoFactorAuthentication = () => {
    return `/auth/login/2FA`
}

//dashboard url

const getFiatMetrics = () => {
    return `/dashboards/fiat-transaction-chart`
}

const getCryptoMetrics = () => {
    return `/dashboards/crypto-transaction-chart`
}

const getUserMetrics = () => {
    return `/dashboards/users-chart`
}

const getFiatRevenue = () => {
    return `/dashboards/profit-revenue-chart`
}
//transactions url

const getFiatTransactions = () => {
    return `/transactions/fiat`
}

const getOneFiatTransactions = (id) => {
    return `/transactions/fiat/${id}`
}

const getBillTransactions = () => {
    return `/transactions/bills`
}

const getOneBillTransactions = (id) => {
    return `/transactions/bills/${id}`
}

const getCryptoTransactions = () => {
    return `/transactions/crypto`
}

const getOneCryptoTransactions = (id) => {
    return `/transactions/crypto/${id}`
}

//admin url

const inviteAdmin = () => {
    return `/invite`
}

const inviteSuperAdmin = () => {
    return `/invite-superadmin`
}

const resendInviteAdmin = () => {
    return `/resend-invite`
}

const fetchAdmins = () => {
    return `/`
}

//role url

const getRoles = () => {
    return `/roles`
}

const updateAdminRole = (id) => {
    return `/${id}`
}

//customers/users url

const getAllUsers = () => {
    return `/customers`
}

const getOneUser = (id) => {
    return `/customers/${id}`
}

const getUserAssest = (id) => {
    return `/customers/${id}/assets`
}

const getCustomerBalance = (id) => {
    return `/customers/${id}/all-balances`
}

//ledger (on click of fireblocks card)
const getFireBlockTrx = (currency) => {
    return `/ledgers/fireblocks-transaction/${currency}`
}

const getFireBlockSaving = (currency) => {
    return `/ledgers/fireblocks-savings/${currency}`
}

//wallets card
//fireblock card (display fireblocks card)
const getFireBlockTrxCard = (currency) => {
    return `/wallets/fireblocks-transaction/${currency}`
}

const getFireBlockSavingCard = (currency) => {
    return `/wallets/fireblocks-savings/${currency}`
}

//baxi

const getBaxiBalance = () => {
    return `wallets/baxi`
}
//stellas
const getStellasBalance = () => {
    return `wallets/stellas`
}

//baxi/stella details

const getStellaorBaxiLedger = (name) => {
    return `/ledgers/${name}`
}

//fireblockwallet
const getFireBlockWalletTrx = (currency) => {
    return `/wallets/fireblocks-transaction/${currency}`
}
//settings global config
// const getTransactionLimit = () => {
//     return ``
// }

const getRate = () => {
    return `/settings/app-rates`
}

const otcRate = () => {
    return `/settings/otc-rates`
}

const getFees = () => {
    return `/settings/fees`
}

const updateLimit = () => {
    return `/settings/transaction-limit`
}

//miscellanous

const getCurrencies = () => {
    return `/settings/currencies`
}

//cryptochart

const getCryptoChart = () => {
    return `/transactions/crypto/summary`
}

//lock account

const suspendAccount = (id) => {
    return `/customers/${id}/block`
}

const unSuspendAccount = (id) => {
    return `/customers/${id}/unblock`
}

//suspend Account

const lockAccount = (id) => {
    return `/customers/${id}/status`
}

export {
    loginUser,
    setPassword,
    twoFactorAuthentication,
    getRoles,
    inviteAdmin,
    getOneFiatTransactions,
    getBillTransactions,
    getOneBillTransactions,
    getCryptoTransactions,
    getOneCryptoTransactions,
    inviteSuperAdmin,
    getFiatTransactions,
    getFiatMetrics,
    getFiatRevenue,
    getCryptoMetrics,
    getUserMetrics,
    getAllUsers,
    getOneUser,
    getUserAssest,
    fetchAdmins,
    resendInviteAdmin,
    getStellasBalance,
    getBaxiBalance,
    getCurrencies,
    getFireBlockTrx,
    getFireBlockSaving,
    getFireBlockTrxCard,
    getFireBlockSavingCard,
    getFees,
    getRate,
    updateLimit,
    getFireBlockWalletTrx,
    lockAccount,
    unSuspendAccount,
    suspendAccount,
    updateAdminRole,
    getStellaorBaxiLedger,
    getCryptoChart,
    getCustomerBalance,
    otcRate
}
