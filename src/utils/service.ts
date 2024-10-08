import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import NetInfo from '@react-native-community/netinfo';
import Config from 'react-native-config';
import {Store} from '@reduxjs/toolkit';

import {
  publicEndpoints,
  endpointsWithoutToken,
  endpointForFile,
  endpointForPDF,
} from '../config/api';

const service = axios.create({baseURL: Config.API_BASE_URL, timeout: 60000});
const hazardService = axios.create({
  baseURL: Config.HAZARD_API_BASE_URL,
  timeout: 60000,
});

const setupInterceptors = (_store: Store) => {
  service.interceptors.request.use(
    async (config: any) => {
      const controller = new AbortController();
      const info = await NetInfo.fetch();
      if (!info.isConnected) {
        controller.abort();
      }
      const token = await EncryptedStorage.getItem('token');
      config.headers.Accept = 'application/json';
      if (token && !endpointsWithoutToken.includes(config.url)) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (endpointForFile.includes(config?.url)) {
        config.headers = {
          ...config.headers,
          post: {'Content-Type': 'multipart/form-data'},
        };
      }
      if (endpointForPDF.includes(config?.url)) {
        config.headers = {...config.headers, 'Content-Type': 'application/pdf'};
      }
      console.log('request', config?.url, JSON.stringify(config?.data));
      return {...config, signal: controller.signal};
    },
    (error: any) => {
      Promise.reject(error);
    },
  );
  service.interceptors.response.use(
    (response: any) => {
      console.log(
        'response',
        response?.config?.url,
        JSON.stringify(response?.data),
      );
      return response;
    },
    async (error: any) => {
      if (error.code === 'ERR_CANCELED') {
        return {
          data: {wsDisplayMessage: 'Please check your network'},
        };
      }

      let originalRequest = error.config;
      if (
        (error?.response?.data?.status === 401 &&
          !publicEndpoints.includes(originalRequest.url)) ||
        error?.response?.status === 429
      ) {
        // store.dispatch(logout() as any);
        return Promise.reject(error?.response?.data || 'something went wrong');
      }
      return error?.response;
    },
  );
};

export {setupInterceptors};
export {hazardService};
export default service;
