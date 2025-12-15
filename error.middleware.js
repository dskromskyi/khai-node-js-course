// error.middleware.js
const errorResponder = (err, request, response, next) => {
   // Якщо немає statusCode у помилки — задамо 500
   const status = err.statusCode || 500;
   response.header("Content-Type", "application/json");
   response.status(status).send({ message: err.message });
};

module.exports = { errorResponder };
