"use strict";

const invoices = require('../models').invoices;

exports.list = function (req, res) {
    invoices.findAll().then(invoices => {
      res.jsonp(invoices);
    });
  };
  
  exports.create = function (req, res) {
    res.jsonp(invoices.create(req.body));
  };
  
  exports.findById = function (req, res) {
    let id = req.params.id;
    invoices.findById(id).then(invoices => {
      res.jsonp(invoices);
    });
  };
  
  exports.update = function (req, res) {
    let id = req.params.id;
    invoices.findById(id).then(invoices => {
        invoices.update(req.body);
    });
    res.jsonp(invoices);
  };
  
  exports.delete = function (req, res) {
    let id = req.params.id;
    invoices.findById(id).then(invoices => {
        if(invoices) {
            invoices.destroy();
          res.jsonp(invoices);
        }
        else
          res.status(500).send('Invoice Not Found');
      });  
  };