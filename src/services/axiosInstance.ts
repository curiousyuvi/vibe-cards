import axios from "axios";

const API_endpoint = process.env.REACT_APP_API_ENDPOINT;
export const axiosInstance = axios.create({ baseURL: API_endpoint });