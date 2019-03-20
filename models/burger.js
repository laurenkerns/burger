const orm = require("../config/orm.js");

//object FOR ALL MY SQL STATEMENTS
const burger = {
  //SELECT ALL MYSQL STATEMENT 
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
  //Create or INSERTONE MY SQL STATEMENT 
    insertOne: function(cols, vals, cb) {
      orm.createOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
  //UPDATE MY SQL STATEMENT 
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

  };
  
  // Export the database functions for the controller 
  module.exports = burger;