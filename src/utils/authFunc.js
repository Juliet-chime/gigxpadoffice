const setAuth = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};

const getAuth = (name) => {
    let data = localStorage.getItem(name);
    if (data == null) {
        return false;
    } else {
        // data = data;
        return data;
    }
};

export { setAuth, getAuth }