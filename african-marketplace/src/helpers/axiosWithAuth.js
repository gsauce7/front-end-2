import axios from "axios";

const baseURL = "https://ptct-african-marketplace-5.herokuapp.com/api"

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: baseURL,
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}