import axios from "axios";

axios.interceptors.request.use(function (config) {
    // const token = JSON.parse(localStorage.getItem('userInfo'))?.data?.token
    // if(token)
    //     config.headers.Authorization =  token;
    config.baseURL = process.env.REACT_APP_SERVER
    config.withCredentials=true
    // config.url = `${process.env.REACT_APP_SERVER}`
    return config;
})

export const postRequest = async(url,data)=>await axios.post(url,data)
export const getRequest = async(url,data)=>await axios.get(url,data)
export const updateRequest = async(url,data)=>await axios.put(url,data)
export const deleteRequest = async(url,data)=>await axios.delete(url,data)