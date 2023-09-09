const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
        required: true,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Song', songSchema);
