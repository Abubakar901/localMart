const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB)
    .then(() =>{
    console.log('Database Connected');
        }).catch((error) => {
    console.log("Error");
        })
}

module.exports = connectDatabase;