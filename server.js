const express = require('express');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME;

app.use((req, res, next) => {
    console.log(`Request served by ${appName}`);
    next();
});

// Serve static files from 'public' directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
