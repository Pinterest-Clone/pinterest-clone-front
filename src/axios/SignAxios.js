import axios from "axios";

const SignAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

export default SignAxios;