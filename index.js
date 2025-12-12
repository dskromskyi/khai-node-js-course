// index.js
const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');

const app = express();
const PORT = 3000;

// Apply middleware globally
app.use(logRequest);

// Use product routes
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
