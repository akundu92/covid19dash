import axios from 'axios';

console.log( axios.defaults.headers)
export default axios.create({
    baseURL : 'https://cors-anywhere.herokuapp.com/https://thevirustracker.com',
})

