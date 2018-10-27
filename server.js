const path = require('path');
const gateway = require('express-gateway');

const HOST = 'localhost'

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
