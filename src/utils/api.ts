import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/",
    params: {
        apiKey: process.env.REACT_APP_apiKey
    }
})

export default api