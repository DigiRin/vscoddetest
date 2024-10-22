const functions = require('@google-cloud/functions-framework');

// HTTP関数を定義
functions.http('helloWorld', (req, res) => {
  res.send('Hello, World!');
});
