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

const getUserHandler = (req, res) => {
  const sName = req.query.name;
  // const sActive = req.query.isActive;
  // const { id, name, email, password, isActive } = req.body;

  const filteredUser = users.filter((user) => {
    if (sName !== undefined && user.isActive !== undefined) {
      return sName == user.name && user.isActive == true;
    } else if (sName !== undefined) {
      return sName == user.name;
    } else if (user.isActive !== undefined) {
      return user.isActive == true;
    }
    return user;
  });
  res.json(filteredUser);
  // const filteredUser = users.filter((user) => {
  //   if (user.name == sName) {
  // user.name = name;
  // user.email = email;
  // user.password = password;
  // user.isActive = isActive;
  // return (user.id = id), (user.name = name), (user.email = email), (user.password = password), (user.isActive = isActive);
  // } else if (user.isActive == sActive) {
  // user.name = name;
  // user.email = email;
  // user.password = password;
  // user.isActive = isActive;
  //   } else {
  //     return user
  //   }
  // });
  // res.send(JSON.stringify(filteredUser));
};

const createUserHandler = (req, res) => {
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

const getUserDetailHandler = (req, res) => {
  const { id } = req.params;
  const filteredUser = users.filter((user) => user.id === parseInt(id));

  if (filteredUser.length === 0) {
    res.status(404).send('User not found!');
  } else {
    res.send(filteredUser[0]);
  }
};

const deleteUserHandler = (req, res) => {
  const id = req.param('id');
  const filteredUser = users.filter((user) => user.id !== parseInt(id));

  if (filteredUser.length === users.length) {
    res.status(404).send('User not found!');
  } else {
    res.json(filteredUser);
  }
};

const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, email, password, isActive } = req.body;

  const filteredUser = users.filter((user) => user.id === parseInt(id));

  if (filteredUser.length === 0) {
    res.status(404).send('User not found!');
    return;
  }

  const updatedUser = users.map((user) => {
    if (user.id === parseInt(id)) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.isActive = isActive;
    }

    return user;
  });

  res.json(updatedUser);
  return;
};

const isAdmin = (req, res, next) => {
  if (req.query.role === 'admin') {
    next();
    return;
  }

  res.status(401).send('Anda bukan Admin');
  return;
};

app.get('/api/users', getUserHandler);
app.post('/api/users', createUserHandler, isAdmin);
app.get('/api/users/:id', getUserDetailHandler);
app.delete('/api/users/:id', deleteUserHandler);
app.put('/api/users/:id', updateUserHandler);

app.listen(port, () => {
  console.log('Server running at http://127.0.0.1:1000');
});
