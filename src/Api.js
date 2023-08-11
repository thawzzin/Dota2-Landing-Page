import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://api.opendota.com/api'
})