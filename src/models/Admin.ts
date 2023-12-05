import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true },
}, {timestamps: true});

export default mongoose.models.Admin || mongoose.model('Admin', userSchema);