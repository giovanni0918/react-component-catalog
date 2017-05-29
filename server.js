'use strict';
/**
 * Import dependencies 
 */
const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');

/**
 * Specifies port
 */
app.set('port', (process.env.PORT || 5000));

/**
 * Tells node which directory to serve static content from
 */
app.use(express.static('public'))

/**
 * Enables GZip compression
 */
app.use(compression());

/**
 * Tells node where to find the index.html file
 */
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', '/index.html'));
});

/**
 * Spin up a web server on port 5000
 */
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});