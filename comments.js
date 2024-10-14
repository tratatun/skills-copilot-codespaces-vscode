// Create web server
// Create express app
const express = require('express');
const app = express();
// Create a route to handle GET requests to the URL /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});
// Start the server on port 4001
app.listen(4001, () => {
  console.log('Your app is listening on port 4001');
});