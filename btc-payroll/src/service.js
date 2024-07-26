
import axios from 'axios';

const gustoAPI = axios.create({
  baseURL: 'https://api.gusto.com/v1/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GUSTO_API_KEY}`,
  },
});

export const getEmployees = async () => {
  try {
    const response = await gustoAPI.get('/employees');
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};
