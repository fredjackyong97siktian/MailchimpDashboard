import axios from 'axios';
const config = require('./../../config')

const publicFetch = axios.create({
    baseURL: String(config.API_BACKEND)
});

export {publicFetch}