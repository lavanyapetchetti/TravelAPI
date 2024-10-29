import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Now you can access your variables
const apiKey = process.env.API_KEY;

// Function to make GET requests
const get = async (url, additionalHeaders = {}) => {
    const config = {
        baseUrl: "https://tripadvisor16.p.rapidapi.com/api/v1", // Your base URL
        headers: {
            'Content-Type': "application/json",
            'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
            'x-rapidapi-key': apiKey, // Use the retrieved API key here
        },
    };
    try {
        const response = await axios.get(`${config.baseUrl}${url}`, {
            headers: { ...config.headers, ...additionalHeaders },
        });
        // Validate the response status
        if (response.status !== 200) {
            throw new Error(`Unexpected status code: ${response.status}`);
        }

        // Validate response structure
        if (!response.data || typeof response.data !== 'object') {
            throw new Error('Invalid response structure: data is missing or not an object.');
        }

        return response.data; // Return the data from the response
    } catch (error) {
        console.error(`Error making GET request: ${error.message}`);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

// Future functions can be added here, e.g., POST, PUT, DELETE methods
export default {
    get,
    // You can add more methods here in the future
};
