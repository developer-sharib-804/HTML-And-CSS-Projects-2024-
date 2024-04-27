$(document).ready(function() {
    const ball = $("#ball");
    const speed = 1; // Adjust the speed of movement as needed
  
    function moveBall(direction) {
      switch (direction) {
        case "left":
          ball.animate({ left: "-=" + speed + "1px" }, 1, function() {
            moveBall("left");
          });
          break;
        case "right":
          ball.animate({ left: "+=" + speed + "1px" }, 1, function() {
            moveBall("right");
          });
          break;
        case "bottom":
          ball.animate({ top: "+=" + speed + "1px" }, 1, function() {
            moveBall("bottom");
          });
          break;
        case "top":
          ball.animate({ top: "-=" + speed + "1px" }, 1, function() {
            moveBall("top");
          });
          break;
      }
    }
  
    $("#left").on("mousedown", function() {
      moveBall("left");
    }).on("mouseup", function() {
      ball.stop();
    });
  
    $("#right").on("mousedown", function() {
      moveBall("right");
    }).on("mouseup", function() {
      ball.stop();
    });
  
    $("#bottom").on("mousedown", function() {
      moveBall("bottom");
    }).on("mouseup", function() {
      ball.stop();
    });
  
    $("#top").on("mousedown", function() {
      moveBall("top");
    }).on("mouseup", function() {
      ball.stop();
    });
  });