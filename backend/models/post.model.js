const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  created: { type: Date, required: true },
  updated: { type: Date },
  status: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);
