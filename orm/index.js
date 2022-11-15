const express = require('express');
const app = express();
const { users } = require('./models');

app.use(express.json());

app.get('/users', (req, res) => {
  users.findAll().then((user) => {
    res.status(200).json(user);
  });
});

app.get('/users/:id', (req, res) => {
  users
    .findOne({
      where: { id: req.params.id },
    })
    .then((user) => {
      res.status(200).json(user);
    });
});

app.post('/users', (req, res) => {
  users
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
    })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(402).json("Can't create User");
    });
});

app.put('/users/:id', (req, res) => {
  users
    .update(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
      },
      {
        where: { id: req.params.id },
      }
    )
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(422).json("Can't create User");
    });
});
