import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7272/api',
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || 'An error occurred';
      switch (status) {
        case 400:
          console.error('Bad Request: ', message || 'Invalid request data');
          break;
        case 401:
          console.error('Unauthorized: Please log in again');
          break;
        case 403:
          console.error('Forbidden: You do not have access to this resource');
          break;
        case 404:
          console.error('Not Found:', message);
          break;
        case 409:
          console.error('Conflict:', message);
          break;
        case 429:
          console.error('Too Many Requests: Try again later');
          break;
        case 500:
          console.error('Server Error:', message);
          break;
        case 504:
          console.error('Gateway Timeout: The server did not respond in time');
          break;
        default:
          console.error(
            'Unexpected Error: ',
            status,
            message || 'Unknown error occurred'
          );
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
