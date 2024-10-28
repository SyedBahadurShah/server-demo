const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = { id: userId, name: "Sample User" };
  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = { ...req.body, id: userId };
  res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  res.json({ message: `User with ID ${userId} deleted.` });
});

// Export the Express app as a Vercel serverless function
module.exports = app;
