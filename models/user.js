
const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    editable: Boolean
});


module.exports = mongoose.model('User', User);