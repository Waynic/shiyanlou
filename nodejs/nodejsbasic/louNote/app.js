var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();

app.set('views', path.join(__dirname, 'views'));
