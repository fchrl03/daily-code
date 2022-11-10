const express = require('express');
const handler = require('./handler');
const middleware = require('./middleware');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.post('/user', handler.handleCreateUser);
app.get('/user', handler.handleListUser);
app.get('/user/:id', middleware.setUser, handler.handleGetUser);
app.put('/user/:id', middleware.setUser, handler.handleUpdateUser);
app.delete('/user/:id', middleware.setUser, handler.handleDeleteUser);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
