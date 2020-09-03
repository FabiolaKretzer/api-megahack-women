const axios = require('axios')

const api = axios.create({
    baseURL: 'https://gateway.gr1d.io/sandbox/'
})

module.exports = api