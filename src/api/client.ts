import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const client = axios.create({
  baseURL: 'https://dev.tovtrip.com/usersvc/api/v1',
  headers: {
    apikey: '037cb34d-c5ee-4169-b2fd-bec049f77ecf',
    'x-platform': 'android',
  },
});

// Request interceptor to add JWT token from AsyncStorage
client.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('auth_token');
      console.log(
        'Interceptor - Token from storage:',
        token ? '✓ Found' : '✗ Not found',
      );
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log(
          'Authorization header set:',
          `Bearer ${token.substring(0, 20)}...`,
        );
      } else {
        console.log('No token found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error reading auth token from AsyncStorage:', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default client;
