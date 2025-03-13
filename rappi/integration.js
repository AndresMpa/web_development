const axios = require('axios');

async function getRappiToken() {
    try {
        const response = await axios.post(`${process.env.RAPPI_API_URL}/token`, {
            client_id: process.env.RAPPI_CLIENT_ID,
            client_secret: process.env.RAPPI_CLIENT_SECRET,
            grant_type: 'client_credentials',
            audience: process.env.RAPPI_API_URL
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching token:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { getRappiToken };
