// Import Express Library
const express = require("express");
// Instantiate a server.
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json(`Hello Ahmedabad University! Welcome to the API Server.`);
});
app.get("/api/time", (req, res) => {
  res.json(new Date().toString());
});

// Run the Express JS server on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
