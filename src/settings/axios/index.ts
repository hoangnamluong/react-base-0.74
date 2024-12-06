import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {API} from '../../assets/data/network';

const axiosInstance = axios.create({
  baseURL: API,
  maxBodyLength: Infinity,
  responseEncoding: 'UTF-8',
  insecureHTTPParser: true,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }

    console.log('URL::::', config.url);
    console.log('BODY::::', config.data);
    console.log('HEADERS::::', config.headers);

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const [accessToken, refreshToken] = await AsyncStorage.multiGet([
          'accessToken',
          'refreshToken',
        ]);

        console.log('ACCESS_TOKEN::::', accessToken);
        console.log('REFRESH_TOKEN::::', refreshToken);

        //fetch new token
        const newAccessToken = '';
        await AsyncStorage.setItem('accessToken', newAccessToken);

        return axiosInstance(originalRequest);
      } catch (error) {
        AsyncStorage.multiSet([
          ['accessToken', ''],
          ['refreshToken', ''],
        ]);

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
