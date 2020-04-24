import axios from 'axios';

console.log( axios.defaults.headers)
export default axios.create({
    baseURL : 'https://thevirustracker.com',
})

