const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let users = [
    { id: 1, name: 'Radhe Patel' },
    { id: 2, name: 'Jagratr Pandya' }
];

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: 'User added successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});