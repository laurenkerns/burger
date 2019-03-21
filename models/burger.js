const orm = require("../config/orm.js");

//object FOR ALL MY SQL STATEMENTS
const burger = {

//SELECT ALL 
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },


//CREATE // INSERT ONE 
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    
//UPDATE
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

  };
  
  // Export the database functions for the controller 
  module.exports = burger;