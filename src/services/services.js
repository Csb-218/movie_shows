import axios from 'axios'

export async function getShows(){

    const options = {
        // baseURL: `${process.env.SERVER_BASE_URL}`,
        url : `https://api.tvmaze.com/search/shows`,
        method:'GET',
        params:{
          q:'all'
        }
    }

    const response = await axios.request(options)
    return response
}