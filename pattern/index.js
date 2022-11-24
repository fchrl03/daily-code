const express = require('express');
const app = express();
const port = 8000;
const productController = require('./controllers/productController');

app.use(express.json());

app.post('/product', productController.create);
// app.get('/product', productGetAllHandler);
// app.get('/product/:id', productGetDetailHandler);
// app.put('/product/:id', productUpdateHandler);
// app.delete('/product/:id', productDeleteHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
