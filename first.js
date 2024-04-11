const express = require('express');
const https = require('https');
const fs = require('fs');

const PATH_TO_CERT='./cert/cert.pem'
const PATH_TO_KEY='./cert/key.pem'

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

https
  .createServer(
    {
      key: fs.readFileSync(PATH_TO_KEY),
      cert: fs.readFileSync(PATH_TO_CERT),
    },
    app,
  )
  .listen(3000, () => {
    console.log(`Server has been started on port ${3000}`);
  });
