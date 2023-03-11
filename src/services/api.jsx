import axios from "axios"

// 69029100/json/

const api = axios.create({
 baseURL: "https://viacep.com.br/ws/",
});

export default api;