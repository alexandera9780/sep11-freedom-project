const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// ... (previous code)

// Middleware to parse JSON request bodies
app.use(express.json());

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET endpoint to retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users); // Sends the users array as a JSON response
});

// POST endpoint to create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser); // Responds with the new user and a 201 Created status
});

// ... (previous app.listen code)
