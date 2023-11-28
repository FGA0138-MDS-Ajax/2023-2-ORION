import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String},
    alias: {type: String},
    email: {type: String, unique: true, trim: true},
    password: {type: String, trim: true},
    events: [{}],
});

export default mongoose.models.User || mongoose.model('User', userSchema);