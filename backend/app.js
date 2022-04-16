const express = require('express');
const app = express();

const errormiddleware = require('./middleware/error');

app.use(express.json());


const product = require('./routes/ProductRoute');

app.use('/api/v1',product)

// middle ware for error
app.use(errormiddleware);

module.exports = app;