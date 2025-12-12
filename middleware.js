// middleware.js

// A simple middleware function that logs the request details
function logRequest(req, res, next) {
   console.log(`Received a ${req.method} request to ${req.url}`);
   next(); // Call the next middleware
}

module.exports = { logRequest };
