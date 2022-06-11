import axios from "axios";

const api = {
    getDBS: function() {
        return axios.get("https://dvasquez4155.github.io/TFM/db.js");
    }
};
export default api;