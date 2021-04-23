import axios from "axios";

const apiClient = axios.create({
    // baseURL: API_URL, // <- ENV variable
    baseURL: 'http://localhost:8080'
});

apiClient.interceptors.request.use((config) => {
        return ({
            ...config,
            headers: {
                'content-type': 'application/json',
                'Accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': "GET, POST, OPTIONS"
            },
        })
    },
    error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
        response,
    async (error) => {
        // ...
        return Promise.reject(error.response.data);
    },
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };