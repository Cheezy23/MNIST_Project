/* == Sean Moylan ==
      G00299424
*/

// == References ==
// http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html?fbclid=IwAR0mCUF5uZYTQUk4zXebQCWWw6Iau31fEsGhRm_OaMvRGNysZ5piTqP4LHA
// https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse/8398189#8398189
// https://stackoverflow.com/questions/46349370/javascript-file-not-found-using-relative-path-during-flask-render-template

// == Variables ==
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var drawing = false;
var mousePos = { x:0, y:0 };
var lastPos = mousePos;
w = canvas.height;
h = canvas.width;

ctx.strokeStyle = "#222222";
ctx.lineWith = 2;


// == Mouse event listeners ==
canvas.addEventListener("mousedown", function (e) {
        drawing = true;
  lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function (e) {
  drawing = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
  mousePos = getMousePos(canvas, e);
}, false);


// == Get mouse position ==
function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}



// == Gives regular intervals for draw animation ==
window.requestAnimFrame = (function (callback) {
  return window.requestAnimationFrame || 
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimaitonFrame ||
     function (callback) {
        window.setTimeout(callback, 1000/60);
     };
})();


// == Draw on canvas ==
function renderCanvas() {
  if (drawing) {
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    lastPos = mousePos;
  }
}

// == Animation ==
(function drawLoop () {
  requestAnimFrame(drawLoop);
  renderCanvas();
})();



// == Predict OnClick ==
$("#predictBtn").click(function (e) {
  // Prevent the form submitting.
  e.preventDefault();
  
  
  // Create a dictonary to bundle data to send
  var dataToSend = {"imageData": JSON.stringify(canvas.toDataURL())};

  // Print the contents of the image to the javascript console
  $.post("/uploadimage", dataToSend, function(data){
    // Display data to console when it is recieved from the server
    console.log(data);
    console.log(canvas.toDataURL());
    $("#predictionText").text("Prediction: "+data["prediction"]);
  });
});


// == Clear canvas OnClick ==
$("#clearBtn").click(function (e) {
  clearCanvas();
  console.log("Canvas cleared");
});

function clearCanvas(){
  canvas.width = canvas.width;
}