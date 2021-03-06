//dependencies 
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

//////////////////ROUTES////////////////////

///SELECT ALL
  router.get("/", function(req, res) {
    burger.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  
///CREATONE
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
     ], [
      req.body.burger_name, req.body.devoured
     ],
      function(result){
      res.json({ id: result.insertId})
    });
  });

  
///UPDATEONE  
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id =" + req.params.id;
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    },
       condition, function(result){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }) 
     
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;
  
