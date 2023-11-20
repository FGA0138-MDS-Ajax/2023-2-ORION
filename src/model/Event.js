const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: Number,
    name: String,
    description: String,
    creationDate: Date,
    startDate: Date,
    endDate: Date,
    participants: [Number],
    creator: Number,
    category: String
}, {timestamps: true});
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;