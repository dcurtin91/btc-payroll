// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const gustoAPI = axios.create({
  baseURL: 'https://api.gusto-demo.com/v1/companies/ea19d4e7-0a12-4bf9-9e5b-65242fa638da/employees',
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GUSTO_API_KEY}`,
    'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
  },
});

const getEmployees = async () => {
  try {
    const response = await gustoAPI.get('/');
    return response.data;
    
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
