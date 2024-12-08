import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});

export default ({ app, store, router }) => {
    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                router.push("/login");
            }
            return Promise.reject(error);
        }
    );

    app.config.globalProperties.$axios = api;
};

export { api };