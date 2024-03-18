import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://fakestoreapi.com' // change this link to your api
})

export default axios