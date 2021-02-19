import axios from 'axios';
const config = require('./../../config')
axios.defaults.withCredentials = true
const publicFetch = axios.create({
    baseURL: String(config.API_BACKEND)
});

export {publicFetch}