import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
    baseURL : process.env.REACT_APP_API_URL ,headers :{
        'content-type' : 'appication/json',
    },
    paramsSerializer : params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) =>{
    return config;
});
axiosClient.interceptors.response.use((res) =>{
    if(res && res.data){
        return res.data;
    }
    return res;
}, (error) =>{
    throw error;
});


export default axiosClient;