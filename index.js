const express = require('express');
const app = express();
app.get('/ping', (request, response) => {
 response.send('pong');
});
app.listen(8080, 'localhost');
