import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const configuration = config;
  // Here you could set the token to authenticate the requests
  // const token = localStorage.getItem('token');
  // if (token && configuration.headers) {
  //     configuration.headers.Authorization = `Bearer ${token}`;

  return configuration;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const getCustomAxiosInstance = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);

  return axiosInstance;
};

const api = getCustomAxiosInstance(
  // use the actual VITE_API_URL to use the backend service
  axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    withCredentials: false,
  })
);

export default api;
