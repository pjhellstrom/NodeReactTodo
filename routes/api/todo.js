const express = require("express");
const router = express.Router();

const Todo = require("../../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: 1 });
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
    s;
  }
});

// Get todos by searchterm
router.get("/search/:searchterm", async (req, res) => {
  try {
    const todos = await Todo.find({
      $text: { $search: req.params.searchterm }
    }).sort({ date: 1 });
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
    s;
  }
});

// Get todos by category
router.get("/category/:category", async (req, res) => {
  try {
    const todos = await Todo.find({
      category: req.params.category
    }).sort({ date: 1 });
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
    s;
  }
});

// Get todos due shortly
router.get("/soon", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: 1 });
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      category: req.body.category,
      due_date: req.body.due_date
    });

    const todo = await newTodo.save();

    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
  }
});

// Update todo by id
// router.put("/:id", async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);

//     res.json(todo);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error occured...");
//   }
// });

// Delete todo by id
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    await todo.remove();

    res.json({ msg: "Todo deleted..." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error occured...");
  }
});

module.exports = router;
