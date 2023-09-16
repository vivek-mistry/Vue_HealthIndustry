import axios from "axios"

window.axios = axios
axios.defaults.withCredentials = false
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'