// Import Express framework
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store todos
let todos = [];

// GET: Root endpoint to avoid "Cannot GET /" error
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the To-Do List API', endpoints: ['/todos'] });
});

// GET: Retrieve all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST: Create a new todo
app.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// PUT: Update a todo by ID
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// DELETE: Remove a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.status(204).send();
});

// Start the server on port 3000 (or environment port for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));