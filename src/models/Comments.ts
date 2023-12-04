import mongoose  from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    text: {type: String, required: true, trim: true},
}, {timestamps: true});

export default mongoose.models.Event || mongoose.model('Event', commentSchema);
