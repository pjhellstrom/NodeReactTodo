const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    default: Date.now
  }
});

TodoSchema.index({ title: "text", description: "text" });

module.exports = Todo = mongoose.model("todo", TodoSchema);
