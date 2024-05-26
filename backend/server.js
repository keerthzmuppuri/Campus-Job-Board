// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/api/jobs', (req, res) => {
    // This is a placeholder route to fetch job listings
    const jobs = [
        { title: 'Software Engineer Intern', company: 'Tech Solutions' },
        { title: 'Marketing Intern', company: 'Startup Inc.' }
    ];
    res.json(jobs);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
