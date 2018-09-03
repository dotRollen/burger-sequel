$(function() {
    // After DOM is completed loaded, add the following event listeners
    // to all DOM elements
    $(".create-form-customer").on("submit", function(event) {
      // Event listener for the customer create form, will send a request
      // to the server for creating the customer and storing on the database
      event.preventDefault();
  
      var newCustomer = {
        // Store the information of the form input fields as an object
        customer_name: $("#customer-name").val().trim()
      };
  
      $.ajax("/api/customers", {
        // Send a POST request to the server of the new customer
        type: "POST",
        data: newCustomer
      }).then(
        function() {
          // If request is succesfull, console log status
          // and reload the customer
          console.log("created new customer");
          location.reload();
        }
      );
    });
  
    $(".delete-customer").on("click", function(event) {
      // Event listener for when a user wants to delete a customer
      // will send the customer's id to the server for deleting from 
      // the database
      var id = $(this).data("id");
  
      $.ajax("/api/customers/" + id, {
        // Send the DELETE request.
        type: "DELETE"
      }).then(
        function() {
          // If succesfull then console log results
          // and reload the page
          console.log("deleted customer", id);
          location.reload();
        }
      );
    });
  });
  