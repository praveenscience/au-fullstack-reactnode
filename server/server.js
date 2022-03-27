// Import Express Library
const express = require("express");
// Instantiate a server.
const app = express();
const port = 5000;

// Run the Express JS server on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
