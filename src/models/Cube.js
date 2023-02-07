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
        // regx validation with match
        // match: /^https?:\/\//,
        // validator with validate
        validate: {
            validator: function (value) {
                return /^https?:\/\//.test(value)
            },
            message: props => `${props.value} is not a valid url path!`
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

