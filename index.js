const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// canvas.style.backgroundColor = "rgb(139, 34, 34)";
const stageWidth = document.body.clientWidth,
  stageHeight = document.body.clientHeight;

function drawBezierCurve() {
  var startPointX = stageWidth;
  var startPointY = stageHeight;
  var cp1x = stageWidth;
  var cp1y = stageHeight - 10;
  var cp2x = 0;
  var cp2y = stageHeight - 10;
  var endPointX = 0;
  var endPointY = stageHeight;

  /* Start a new Path */
  ctx.beginPath();
  ctx.lineWidth = 3;

  /* Representing first control point */

  ctx.strokeText(".", cp1x, cp1y);

  /* Representing second control point */
  ctx.strokeText(".", cp2x, cp2y);

  /* Starting point of the curve */
  ctx.moveTo(startPointX, startPointY);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endPointX, endPointY);

  /* Drawing line on the canvas  */
  ctx.stroke();
}

function resizeHandler() {
  canvas.width = stageWidth * 2;
  canvas.height = stageHeight * 2;
  ctx.scale(2, 2);
  drawBezierCurve();
}

function init() {
  window.addEventListener("resize", resizeHandler);
}

window.onload = () => resizeHandler();
init();
