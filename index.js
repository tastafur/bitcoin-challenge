const express = require('express');

const app = express();

app.use(express.static('view'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});