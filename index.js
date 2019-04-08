const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('app'));
app.get('/', (req, res) => res.sendFile('home.html', { root: __dirname + "/app"}));

module.exports = app;

app.listen(PORT, () => console.log('Application is running on port: ' + PORT));
