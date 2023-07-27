// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to your API! ');
});

app.get('/abc', (req, res) => {
  res.send('Welcome to your second API! ');
});

app.get('/xyz', (req, res) => {
  res.send('Welcome to your third API! ');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});