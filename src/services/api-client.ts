import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bfedf8294a7e4b19a70c8254907f64e1'
    }
})