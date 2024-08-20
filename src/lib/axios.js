import axios from "axios";
export const axiosIstance = axios.create({
    baseURL: "http://localhost:3000",
});