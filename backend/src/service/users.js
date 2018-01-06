"use strict";

const users = require('../models').users;

exports.list = function (req, res) {
  users.findAll().then(users => {
    res.jsonp(users);
  });
};

exports.create = function (req, res) {
  res.jsonp(users.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  users.findById(id).then(users => {
    res.jsonp(users);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  users.findById(id).then(users => {
    users.update(req.body);
  });
  res.jsonp(users);
};

exports.delete = function (req, res) {
  let id = req.params.id;
	users.findById(id).then(users => {
	  if(users) {
	    users.destroy();
	    res.jsonp(users);
	  }
	  else
	    res.status(500).send('User Not Found');
	});  
};