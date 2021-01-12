import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.87.106:1234/api'
})