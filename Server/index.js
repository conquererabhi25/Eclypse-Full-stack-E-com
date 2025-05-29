// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Dummy Data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Finish assignment', completed: true },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the NodeJS Server!');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
