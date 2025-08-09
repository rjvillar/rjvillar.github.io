const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Job Tracker API is hell eyah!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
