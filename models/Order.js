const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    type: {
        type: String,
        enum: ['LETTER','BOX','HARD BOX'],
        required: true,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    time_frame_delivery: {
        type: String,
        enum: ['OPEN MORNING', 'MIDDLE MORNING', 'NOON', 'OPEN AFTERNOON', 'MIDDLE AFTERNOON', 'CLOSE AFTERNOON', 'ALL NIGHT']
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;