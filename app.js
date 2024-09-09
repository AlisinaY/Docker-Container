const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://admin:password@3.67.170.112:27017/myDB?authSource=admin')
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Connection error', err);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.redirect('/todos');
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
