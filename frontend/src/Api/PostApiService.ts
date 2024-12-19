import axios from 'axios';
import axiosInstance from './AxiosInstance';

export const PostApiClient = {
  getPostByUserId: async (url: string, userId: string | null, config: {}) => {
    try {
      const response = await axiosInstance.get(`${url}/${userId}`, config);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Message:', error.message);

        if (error.response) {
          throw error.response?.data || error.message;
        }
        throw new Error('No response received from server');
      } else {
        console.error('Unknown Error:', error);
        throw new Error('An unknown error occurred');
      }
    }
  },
};
