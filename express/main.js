const express = require('express');
const app = express();
const port = 1000;

app.use(express.json());

const users = [
  {
    id: 1,
    name: 'Terry',
    email: 'terry@example.com',
    password: 'example',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
    password: 'example',
    isActive: false,
  },
  {
    id: 3,
    name: 'Doe',
    email: 'doe@example.com',
    password: 'example',
    isActive: true,
  },
];

const getUsersHandler = (req, res) => {
  res.send(JSON.stringify(users));
};

const createUsersHandler = (req, res) => {
  const { name, email, password, isActive } = req.body;

  if (!name || !email || !password || !isActive) {
    res.status(400).send('name, email, password, is active should not be empty');
    return;
  }

  req.body.id = users[users.length - 1].id + 1;

  users.push(req.body);

  res.status(201).send(users);

  return;
};

app.get('/api/users', getUsersHandler);
app.post('/api/users', createUsersHandler);

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1:1000');
});
