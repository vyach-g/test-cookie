const express = require('express');
const https = require('https');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const PATH_TO_CERT = './cert/cert.pem';
const PATH_TO_KEY = './cert/key.pem';

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true, secure: true, domain: 'dom.ru' });
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
  .listen(4000, () => {
    console.log(`Server has been started on port ${4000}`);
  });
