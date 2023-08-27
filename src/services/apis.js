const loginUser = () => {
    return `/admins/auth/login`;
};

const setPassword = () => {
    return `/admins/auth/set-password`;
};

const twoFactorAuthentication = () => {
    return `/admins/auth/login/2FA`;
};

const getRoles = () => {
    return `/admins/roles`;
};

const inviteSuperAdmin = () => {
    return `/admins/invite-superadmin`;
};

export {
    loginUser, setPassword, twoFactorAuthentication, getRoles,
    inviteSuperAdmin
}