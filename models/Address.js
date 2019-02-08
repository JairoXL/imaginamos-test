const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    address:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postal_code: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});


const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;