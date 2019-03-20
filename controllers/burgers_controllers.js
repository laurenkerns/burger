const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//routes
// Create all our routes and set up logic within those routes where required.
///SELECT ALL
router.get("/", function(req, res) {
    burger.all(function(data) {
      const burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  
  ///CREATONE
  router.post("/api/burgers", function(req, res) {
    burger.create(
      ["burger_name"], 
      [req.body.name], 
      function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  

  ///UPDATEONE  
  router.put("/api/burgers/:id", function(req, res) {
    const id = `id = ${req.params.id}`;
  
    console.log("condition", id);
  
    burger.update(
      {
        id : id
      }, 
       function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;
  
