const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Requst recieved
app.use((req, res, next) => {
	console.log('request recieved');
	next();
});

//status 201
app.use((req, res, next) => {
	res.status(201);
	next();
});

//json response
app.use((req, res, next) => {
	res.json({ message: 'your request was succesful'});

next();
});

//Response sent
app.use(( req, res, next) => {
	console.log('Response sent succesfully');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
