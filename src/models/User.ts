import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true, trim: true },
    alias: { type: String },
    email: { type: String, unique: true, trim: true },
    password: { type: String, require: true, trim: true },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
}, {timestamps: true});

export default mongoose.models.User || mongoose.model('User', userSchema);