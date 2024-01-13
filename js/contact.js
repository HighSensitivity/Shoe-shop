$(document).ready(function() {

        function showPopup() {
          $('#emailSentModal').modal('show');
          setTimeout(function() {
            window.location.href = "index.html";
          }, 3000); // Redirect after 3 seconds
        }

        $('form').submit(function(event) {
          event.preventDefault(); // Prevent form submission

          
          setTimeout(function() {
            showPopup();
          }, 2000); 

          $(this).trigger('reset');
        });
      });
