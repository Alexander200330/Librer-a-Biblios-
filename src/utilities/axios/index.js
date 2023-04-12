import axios from "axios";

const apiBase = (route)=> {
    return axios.create({
        baseURL: `${import.meta.env.VITE_API_URL_BASE}/${route}`
    })
}

export default apiBase;