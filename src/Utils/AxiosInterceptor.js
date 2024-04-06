import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // JWT token expired, redirect to login
      Cookies.remove('farm2door'); // or localStorage.removeItem('jwtToken');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);

export default api;