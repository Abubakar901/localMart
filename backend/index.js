const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./db/database');
const app = express()

dotenv.config({ path : './config/config.env' });
const port = 4000

connectDatabase();

app.get('/', (req,res) => {
    res.send('<h1>Hello Jason</h1>')
})

app.get('/seller', (req, res) => {
    res.send('Seller Route Working Fine')
})

app.listen(port, () => {
    console.log(`Server is Running at ${port}`)
})