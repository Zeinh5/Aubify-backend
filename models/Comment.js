// models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  downvotes: {
    type: Number,
    default: 0
  },
  upvotedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  downvotedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  // Adding the author field
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // Assuming every comment must have an author
  }
});

// Assuming you have a Comment model like this
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;