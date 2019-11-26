// Wait until the DOM is ready.
$(document).ready(function(e) {
  
  // Add a click handler to the submit button.
  $("#submitButton").click(function(e) {
    
    // Prevent the form actually submitting.
    e.preventDefault();
    
    // Find the canvas here
    canvas = document.getElementById('canvas');

    // Print the contents of the image to the javascript console
    console.log(canvas.toDataURL())
    
    // Send AJAX request for new numbers.
    $.post("/uploadimage", {"theimage": canvas.toDataURL()}, function(data){
      
      // Update the text area with the numbers.
      $("#randomNumbers").text(data.message());
    
    });
  
  });

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(15, 10, 100, 100);

  console.log(canvas.toDataURL());

});
