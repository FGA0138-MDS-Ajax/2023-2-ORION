import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {type: String},
    description: {type: String}
    // startDate: {type: Date},
    // endDate: {type: Date},
    // participants: [{}],
    // creator: {type: String},
    // category: {type: String},
    // createdAt: {type: Date},
    // updatedAt: {type: Date}
}, {timestamps: true});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
