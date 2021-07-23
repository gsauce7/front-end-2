import axios from "axios";

const baseURL = ""

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}