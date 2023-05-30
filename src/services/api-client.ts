import axios, { AxiosRequestConfig } from 'axios';

export interface FetchRes<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bfedf8294a7e4b19a70c8254907f64e1'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (config: AxiosRequestConfig) => {
       return axiosInstance.get<FetchRes<T>>(this.endpoint, config).then(res => res.data)
    }
}

export default APIClient;