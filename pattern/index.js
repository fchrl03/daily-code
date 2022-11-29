const express = require('express');
const port = 8000;
const bodyParser = require('body-parser');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import Controller
const productController = require('./controllers/productController');
const authController = require('./controllers/authController');

// Auth
app.post('/register', authController.register);

// Products
app.post('/product', productController.create);
app.get('/product', productController.getAllProduct);
app.get('/product/:id', productController.getDetailProduct);
app.put('/product/:id', productController.updatedProduct);
app.delete('/product/:id', productController.deleteProductById);

// API Documentation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
