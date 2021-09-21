const { Schema, model } = require('mongoose');

const unitSchema = new Schema(
    {
        number: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            required: true,
            trim: true
        },
        size:{
            type: String,
            required: true,
            trim: true
        },
        cost:{
            type: String,
            required: true
        }
    }
)

const Unit = model('Unit', unitSchema);

module.exports = Unit;