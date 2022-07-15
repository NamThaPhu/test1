import axios from 'axios';

const request = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: "https://api-nghiquan.herokuapp.com"
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
