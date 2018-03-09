const { Happy } = require('happy-node');

const config = {
  SERVER_ROOT: __dirname,
  STATIC_PATH: '../static/local/',
  KEYS: ['your-key', 'your-secret'],
  CDN_PATH: '//',
  AUTO_MIDDLEWARE: true
};

let happy = new Happy(config);
