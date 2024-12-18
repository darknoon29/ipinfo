const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const port = 1433;

// Create HTTP server for port 1433
app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip);
    if (ip.includes(':')) {
    ip = ip.split(',').find(ip => ip.includes('.'));
  }
  res.send(`${ip}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
