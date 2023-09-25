const loginUser = () => {
    return `/auth/login`;
};

const setPassword = () => {
    return `/auth/set-password`;
};

const twoFactorAuthentication = () => {
    return `/auth/login/2FA`;
};

const getRoles = () => {
    return `/roles`;
};

const inviteAdmin = () => {
    return `/invite`;
};

const inviteSuperAdmin = () => {
    return `/invite-superadmin`;
};

const getTransactions = () => {
    return `/transactions/fiat`;
};

const getFiatMetrics = () => {
    return `/dashboards/fiat-transaction-chart`;
};

const getFiatRevenue = () => {
    return `/dashboards/fiat-profit-revenue-chart`;
};

// const getFiatProfit = () => {
//     return `/dashboards/fiat-revenue-chart`;
// };

const getCryptoMetrics = () => {
    return `/dashboards/crypto-transaction-chart`;
};

const getUserMetrics = () => {
    return `/dashboards/users-chart`;
};

export {
    loginUser, setPassword, twoFactorAuthentication, getRoles, inviteAdmin,
    inviteSuperAdmin, getTransactions, getFiatMetrics, getFiatRevenue, getCryptoMetrics, getUserMetrics
}