// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// Connect to your MongoDB Atlas cluster
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

// Create a Mongoose model
const YourModel = mongoose.model('YourModel', new Schema({ /* your schema definition */ }));

// Define a route to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await YourModel.find(); // Retrieve data from your MongoDB collection
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
