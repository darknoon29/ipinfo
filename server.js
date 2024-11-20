const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const port = 1433;

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Your public IP is: ${ip}`);
});

// Create HTTP server for port 1433
const app2 = express();
app2.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(`Your public IP is: ${ip}`);
});

app2.listen(port, () => {
  console.log(`Server running on port ${port}`);
});