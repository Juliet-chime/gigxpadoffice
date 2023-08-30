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

const inviteAdmin = () => {
    return `/admins/invite`;
};

const inviteSuperAdmin = () => {
    return `/admins/invite-superadmin`;
};

export {
    loginUser, setPassword, twoFactorAuthentication, getRoles, inviteAdmin,
    inviteSuperAdmin
}