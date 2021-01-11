import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.87.101:1234/api'
})