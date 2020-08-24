import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.sunrise-sunset.org/json?lat=-25.4295963&lng=-49.2712724&date=today',
});

export default api;