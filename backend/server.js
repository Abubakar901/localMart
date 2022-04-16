const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./db/database');

// handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting Down server due to Uncaught Exception`);

    process.exit(1);
})

dotenv.config({ path : './config/config.env' });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Running at ${process.env.PORT}`)
})


// unhandle promise rejection
process.on("unhandledRejection", err => {
    console.log(`Error : ${err.message}`);
    console.log(`Shutting Down server due to Unhandle Promise Rejection`);

    server.close(() => {
        process.exit(1);
    })
})