//FRONT END JS


//////////////ON-CLICK DEVOURED FUNCTION////////////////
$(function() {
    $(".devoured").on("click", function(event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");
  
      const newDevouredState = {
        devoured: newDevoured
      };
  
// AJAX CALL TO BURGERS API
//PUT REQUEST TO UPDATE THE RECORD TO newDevouredState
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function(){
        console.log("changed devoured to", newDevoured);
        location.reload();
      });
    });



//////////////////ON "SUBMIT" CLICK FUNCTION////////////////////////
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger").val().trim(),
      };

//AJAX CALL TO BURGERS API
//POST REQUEST TO CREATE NEW BURGER  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(() => {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });