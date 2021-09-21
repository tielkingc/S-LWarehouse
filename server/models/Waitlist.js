const { Schema, model } = require('mongoose');

const waitlistSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        location: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true
            
        }
    }
)

const Waitlist = model('Waitlist', waitlistSchema);

module.exports = Waitlist;