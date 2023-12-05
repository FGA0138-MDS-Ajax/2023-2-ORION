import mongoose  from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {timestamps: true});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);