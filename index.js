const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('app'));
app.get('/', (req, res) => res.sendFile('home.html', { root: __dirname + "/app"}));

module.exports = app;

// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;

app.listen(PORT, () => console.log('Application is running on port: ' + PORT));
