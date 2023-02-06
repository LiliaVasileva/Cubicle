const mongoose = require('mongoose');


const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    imageUrl: {
        type: String,
        required: true
        // http/https validation
    },
    description: {
        type: String,
        required: true,
        maxLength: 250
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);


module.exports = Accessory;