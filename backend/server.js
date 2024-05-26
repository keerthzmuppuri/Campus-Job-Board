const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example route with URL parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Example route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});

// Example POST route
app.post('/api/user', (req, res) => {
    const { username, email } = req.body;
    // Assuming there's a database to save the user data
    // Example: database.saveUser(username, email);
    res.send(`User ${username} with email ${email} has been saved.`);
});

// Example middleware
app.use((req, res, next) => {
    console.log('A request was made to:', req.originalUrl);
    next();
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

// Handle other errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500: Internal Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
