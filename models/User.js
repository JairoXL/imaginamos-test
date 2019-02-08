const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    doc_type: {
        type: String,
        enum: ['CC','CE','NA'],
        required: true,
    },
    doc_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cellphone: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;