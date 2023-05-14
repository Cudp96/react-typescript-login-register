import axios from "axios";
import { dataInterface, loginInterface } from "../interface/global.interface";


const url = "http://localhost:8080/api/v1";
const productUrl = 'https://api.escuelajs.co/api/v1/products';

export const registerData = async (data: dataInterface) => {
    const response = await axios.post(`${url}/register`, data);
    return response;

};

export const loginData = async (data:loginInterface)=>{
    const response = await axios.post(`${url}/login`,data);
    return response;
}

export const getProduct = async () => {
    const response = await axios.get(`${productUrl}`);
    return response.data;
    // console.log(response.data);
}
export const getSingleProduct = async (id:any) => {
const response = await axios.get(`${productUrl}/${id}`);
    return response.data;
    // console.log(response.data);
}
