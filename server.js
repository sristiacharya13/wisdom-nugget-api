const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const nuggetRoutes = require('./routes/nuggetRoutes');
const listEndpoints = require('express-list-routes');
const Table = require('cli-table3'); // Import the cli-table3 library

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/nuggets', nuggetRoutes);
console.log('\n✅ nuggetRoutes loaded');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log('\n✅ Available API Endpoints:');

    const routes = listEndpoints(app);

    const table = new Table({
        head: ['(index)', 'method', 'path', 'middlewares']
    });

    routes.forEach((route, index) => {
        table.push([index, route.method, route.path, '[]']); // Assuming no specific middleware to list here
    });

    console.log(table.toString());
});

function extractPath(regexp) {
    const match = regexp.toString().match(/^\/\^\\\/(.*?)\\\/\?\$\//);
    return match ? `/${match[1]}` : '';
}