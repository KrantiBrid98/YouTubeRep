import axios from 'axios'

const KEY = "AIzaSyDH7ZHio4N2SHc4z1WbFt3U9SnGqHCNPjU";

export default axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',  
      maxREsult: 5,
      key: KEY  
  }
})