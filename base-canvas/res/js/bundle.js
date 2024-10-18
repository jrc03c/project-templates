(() => {
  // res/js/src/main.mjs
  var width = 512;
  var height = width;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  var context = canvas.getContext("2d");
  context.fillStyle = "red";
  context.fillRect(0, 0, width, height);
})();
