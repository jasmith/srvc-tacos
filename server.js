// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();


mongoose.connect("mongodb://localhost:27017/srvc-tacos");

//const Taco=require('./src/tacoModel.js');
const tacoRoutes = require('./src/tacoRoutes');

const app = express();
app.use(bodyParser.json());
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/api', tacoRoutes);



