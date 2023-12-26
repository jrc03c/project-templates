(() => {
  // res/js/src/main.js
  var width = 512;
  var height = 512;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  var context = canvas.getContext("2d");
  context.fillStyle = "red";
  context.fillRect(0, 0, width, height);
})();
