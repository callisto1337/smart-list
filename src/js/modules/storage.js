const storage = {
    get data() {
        return JSON.parse(localStorage.getItem(`data`)) || [];
    },
    set data(items) {
        localStorage.setItem(`data`, JSON.stringify(items));
    }
};

export default storage;