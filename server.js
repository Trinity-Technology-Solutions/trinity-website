const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/assets-cdn', express.static('assets-cdn'));
app.use('/cdn-libraries', express.static('cdn-libraries'));

// CEIPAL API Configuration
const CEIPAL_CONFIG = {
    apiKey: process.env.CEIPAL_API_KEY || 'YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09',
    cpId: process.env.CEIPAL_CP_ID || 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09',
    host: process.env.CEIPAL_TALENTHIRE_HOST || 'https://talenthire.ceipal.com'
};

// Jobs API endpoint
app.get('/api/jobs', async (req, res) => {
    try {
        const response = await axios.get(`${CEIPAL_CONFIG.host}/api/jobs`, {
            headers: {
                'Authorization': `Bearer ${CEIPAL_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            params: {
                cpId: CEIPAL_CONFIG.cpId,
                limit: 50
            }
        });

        res.json({
            success: true,
            jobs: response.data.jobs || [],
            total: response.data.total || 0
        });
    } catch (error) {
        console.error('CEIPAL API Error:', error.message);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch jobs',
            message: error.message
        });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Trinity Backend running on port ${PORT}`);
    console.log(`📡 CEIPAL Host: ${CEIPAL_CONFIG.host}`);
});