const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        // add http/https valid
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    }
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

