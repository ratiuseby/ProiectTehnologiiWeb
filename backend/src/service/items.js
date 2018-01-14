"use strict";

const items=require('../models').items;

exports.list = function (req, res) {
    items.findAll().then(items => {
      res.jsonp(items);
    });
  };

  exports.create = function (req, res) {
    res.jsonp(items.create(req.body));
  };

  exports.findById = function (req, res) {
    let id = req.params.id;
    items.findById(id).then(items => {
      res.jsonp(items);
    });
  };

  exports.update = function (req, res) {
    let id = req.params.id;
    items.findById(id).then(items => {
      items.update(req.body);
    });
    res.jsonp(items);
  };
  
  exports.delete = function (req, res) {
    let id = req.params.id;
      items.findById(id).then(items => {
        if(items) {
          items.destroy();
          res.jsonp(items);
        }
        else
          res.status(500).send('Item Not Found');
      });  
  };
  