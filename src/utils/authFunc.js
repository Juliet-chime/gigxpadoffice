const setAuth = (name, data) => {
    console.log(data, 'settt')
    localStorage.setItem(name, data);
};

const getAuth = (name) => {
    try {
        return localStorage.getItem(name);
    } catch (e) {
        console.error('Could not get token:', e);
        return null;
    }
};


const removeAuth = (name) => {
    try {
        return localStorage.removeItem(name);
    } catch (e) {
        console.error('Could not remove token:', e);
        return null;
    }
};

const clearLocalStorage = () => {
    localStorage.clear();
};

export { setAuth, getAuth, removeAuth, clearLocalStorage }