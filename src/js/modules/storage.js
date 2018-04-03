const storage = {
    data: JSON.parse(localStorage.getItem(`data`)),
    getData: function() {
        return this.data !== null ? this.data : [];
    },
    saveData: function(items) {
        localStorage.setItem(`data`, JSON.stringify(items));
    }
};

export default storage;