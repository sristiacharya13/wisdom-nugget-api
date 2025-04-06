const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const nuggetRoutes = require('./routes/nuggetRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/nuggets', nuggetRoutes);

// Fallback route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
