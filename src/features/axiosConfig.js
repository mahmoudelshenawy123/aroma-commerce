import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com/'
    baseURL: 'https://invostoreapi.invoacdmy.com/api/'
});
export default instance;