const express = require("express");
const router = express.Router();

let users = require("../data");

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET single user by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// CREATE user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ message: "User deleted" });
});

module.exports = router;
