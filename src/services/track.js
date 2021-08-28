import axios from "axios"
import configService from "./config"

const trackService = {} 

// Allow to fetch tracks from the API
trackService.search = function (q) {
    const type = 'track'

    return axios.get(`${configService.apiURL}/search`, {
        params : { q, type }

    })
    .then(res=> res.data)
}

export default trackService