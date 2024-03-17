// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const { mongoURI } = require('./config');
// const pricingRoutes = require('./routes/pricingRoutes');

// const app = express();

// // Body parser middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose
//   .connect(mongoURI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api', pricingRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/pricing', pricingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
