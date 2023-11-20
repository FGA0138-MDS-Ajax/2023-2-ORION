const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentId: Number,
    event: Number,
    date: Date,
    user: Number,
    likes: Number,
    text: String
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;