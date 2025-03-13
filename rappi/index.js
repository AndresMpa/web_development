const express = require('express');
const { getRappiToken } = require('./integration');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/rappi-token', async (req, res) => {
    try {
        const token = await getRappiToken();
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Rappi token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
