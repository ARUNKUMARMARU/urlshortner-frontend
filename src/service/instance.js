import axios from "axios";

const baseURL = "https://urlshortner-backend-83kz.onrender.com";

//define authinstance
const authInstance = axios.create({ 
    baseURL : baseURL, 
    timeout : 5000,
    headers :{
        'Content-Type' : 'application/json'
    }
});

//define protectedinstance
const protectedInstance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers :{
        'Content-Type' : 'application/json'
    }
});

//define interceptor for protected instance
protectedInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'bearer ' + token;
        }
        return config;
    }
);

export default {
    authInstance,
    protectedInstance
}