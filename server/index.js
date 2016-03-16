var express = require('express'),
		app = express(),
		http = require('http'),
		jade = require('jade'),
		path = require('path'),
		fs = require('fs'),
		favicon = require('serve-favicon')

var conf = {}
conf.public = '../public'
conf.engine = 'jade'
conf.frontend_port = 8080
conf.host = 'localhost'

//favicon buggering requests so lets serve one
app.use(favicon(path.resolve(__dirname,conf.public,'themes','favicon.gif')))

//set config
var io = require('./conf.js')
	.bind(conf)(app)

//auto load routes
require('./load_routes.js')(app,io,conf)
require('./messages/greeting.js')(conf)
