const setAuth = (name, data) => {
    localStorage.setItem(name, data);
};

const getAuth = (name) => {
    try {
        return localStorage.getItem(name);
    } catch (e) {
        return null;
    }
};


const removeAuth = (name) => {
    try {
        return localStorage.removeItem(name);
    } catch (e) {
        return null;
    }
};

const clearLocalStorage = () => {
    localStorage.clear();
};

export { setAuth, getAuth, removeAuth, clearLocalStorage }