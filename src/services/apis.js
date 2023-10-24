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

const fetchAdmins = () => {
    return `/`
}

//role url

const getRoles = () => {
    return `/roles`
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

// const getFiatProfit = () => {
//     return `/dashboards/fiat-revenue-chart`;
// };

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
}
