const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
