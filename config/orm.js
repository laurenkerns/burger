// Import MySQL connection.
const connection = require("../config/connection.js");


//CREAT ORM with select all, insertOne and UpdateOne mysql statements

const orm = {
//SELECT ALL
    selectAll: function(tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

//Insert ONE

    insertOne: function(columnName, itemName, cb) {
      let queryString = "INSERT INTO  burgers ("+ columnName.toString() + ") VALUES (?)";
      connection.query(queryString, [itemName], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

//UPDATE

    updateOne: function(columnName, objColVals, condition, cb) {
      let queryString = "UPDATE burgers SET " +columnName + "=" + objColVals + "WHERE" + condition
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

  };

// Export the orm object for the model (burger.js)
module.exports = orm;
