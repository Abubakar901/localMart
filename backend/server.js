const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./db/database');

// config
dotenv.config({path: './config/config.env'});

// database connection
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is Running at : http://localhost:${process.env.PORT}`)
})