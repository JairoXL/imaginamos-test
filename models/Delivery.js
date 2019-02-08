const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    },
    date_delivery: {
        type: Date,
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        unique: true
    },
    time_frame: {
        type: String,
        enum: ['OPEN MORNING', 'MIDDLE MORNING', 'NOON', 'OPEN AFTERNOON', 'MIDDLE AFTERNOON', 'CLOSE AFTERNOON', 'ALL NIGHT']
    },
    status: {
        type: String,
        enum: ['DELIVERED', 'PENDING', 'RETURNED']
    }
}, {
    timestamps: true
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;