const mongoose = require('mongoose');
const config = require('../config');

// create a function to connect to the db

//  /cubicle create a new db with the given name



async function initDatabase () {
    mongoose.set('strictQuery', false);

    await mongoose.connect(config.DB_URI);

    console.log('Database connected...');

};

module.exports = initDatabase;