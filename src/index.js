const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);

// Error handling middleware must go after routes
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
