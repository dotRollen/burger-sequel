$(function() {
    // After DOM is completed loaded, add the following event listeners
    // to all DOM elements
    $(".change-devoured").on("click", function(event) {
      // Even listener for when a user either eats or 
      // orders the burger again, event listener is added 
      // to all elements with the class change-devoured
      var id = $(this).data("id"); // Takes the id of the element in the event
      var newDevoured = $(this).data("newdevoured"); // Stores the data value of newdevoured
  
      var newDevouredState = {
        // Stores the desired state of the burger item in a object
        devoured: newDevoured
      };

      console.log(newDevouredState);
      $.ajax("/api/burgers/" + id, {
        // Send a PUT request with the id of the burger and the desired
        // state of the burger to the server for handling
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // When server responds log result and reload page
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Event listener for the burger create form, will send a request
      // to the server for creating the burger and storing on the database
      event.preventDefault();
  
      var newBurger = {
        // Store the information of the form input fields as an object
        burger_name: $("#burger-name").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim(),
        CustomerId: $("#submit-burger").data("id")
      };
      console.log(newBurger);
      $.ajax("/api/burgers", {
        // Send a POST request to the server of the new burger
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // If request is succesfull, console log status
          // and reload the burger
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      // Event listener for when a user wants to delete a burger
      // will send the burger's id to the server for deleting from 
      // the database
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        // Send the DELETE request.
        type: "DELETE"
      }).then(
        function() {
          // If succesfull then console log results
          // and reload the page
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  