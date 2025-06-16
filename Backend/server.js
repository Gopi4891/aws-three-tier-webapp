const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  res.send('Hello from Backend API - AWS Three-Tier App!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
