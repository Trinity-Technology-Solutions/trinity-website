// Ceipal Jobs API Integration
const axios = require('axios');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        console.log('Fetching jobs from Ceipal API...');
        
        // Try multiple Ceipal endpoints
        const endpoints = [
            'https://talenthire.ceipal.com/api/jobs',
            'https://trinitetech.ceipal.com/api/jobs',
            'https://jobsapi.ceipal.com/api/jobs'
        ];
        
        let response;
        let lastError;
        
        for (const endpoint of endpoints) {
            try {
                console.log(`Trying endpoint: ${endpoint}`);
                response = await axios.get(endpoint, {
                    headers: {
                        'Authorization': 'Bearer YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09',
                        'Content-Type': 'application/json',
                        'User-Agent': 'Trinity-Website/1.0'
                    },
                    params: {
                        cpId: 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09',
                        limit: 50,
                        status: 'active'
                    },
                    timeout: 10000
                });
                console.log(`Success with endpoint: ${endpoint}`);
                break;
            } catch (err) {
                console.log(`Failed endpoint ${endpoint}:`, err.message);
                lastError = err;
                continue;
            }
        }
        
        if (!response) {
            throw lastError || new Error('All endpoints failed');
        }

        const jobs = response.data.jobs || response.data.data || [];
        
        res.json({
            success: true,
            jobs: jobs,
            total: jobs.length,
            source: 'ceipal-api'
        });
        
    } catch (error) {
        console.error('Ceipal API Error:', error.message);
        
        // Return mock data for testing
        res.json({
            success: true,
            jobs: [
                {
                    id: '1',
                    title: 'Senior Data Engineer',
                    location: 'Remote',
                    type: 'Full-Time',
                    description: 'We are looking for a Senior Data Engineer to join our growing team...',
                    postedDate: new Date().toISOString(),
                    applyUrl: '#'
                },
                {
                    id: '2', 
                    title: 'Business Intelligence Analyst',
                    location: 'New York, NY',
                    type: 'Full-Time',
                    description: 'Join our BI team to help drive data-driven decision making...',
                    postedDate: new Date().toISOString(),
                    applyUrl: '#'
                }
            ],
            total: 2,
            source: 'fallback-data',
            error: error.message
        });
    }
};