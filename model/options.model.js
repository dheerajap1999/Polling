const mongoose = require('mongoose');

// Option Schema
const optionSchema = new mongoose.Schema({
  questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'question',
      required: true,
  },
  text: {
      type: String,
      required: true,
  },
  votes: {
      type: Number,
      default: 0,
  },
  isDeleted: {
      type: Boolean,
      default: false,
  },
  deletedAt: {
      type: Date,
  }
}, { timestamps: true });

module.exports = mongoose.model('Option', optionSchema);