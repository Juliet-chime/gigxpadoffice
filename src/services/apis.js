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

export { loginUser, setPassword, twoFactorAuthentication, getRoles }