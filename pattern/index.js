const express = require('express');
const app = express();
const port = 8000;
const productController = require('./controllers/productController');

app.use(express.json());

app.post('/product', productController.create);
app.get('/product', productController.getAllProduct);
app.get('/product/:id', productController.getDetailProduct);
app.put('/product/:id', productController.updatedProduct);
app.delete('/product/:id', productController.deleteProductById);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
