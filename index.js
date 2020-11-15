const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// canvas.style.backgroundColor = "rgb(139, 34, 34)";
const stageWidth = document.body.clientWidth,
  stageHeight = document.body.clientHeight;

const startPointX = stageWidth;
const startPointY = stageHeight;

let cp1x = stageWidth;
let cp1y = stageHeight;
let cp2x = 0;
let cp2y = stageHeight;
const endPointX = 0;
const endPointY = stageHeight;

let speed = 5;
let increment = 0;

function drawBezierCurve() {
  increment = increment + speed;

  ctx.clearRect(0, 0, stageWidth, stageHeight);
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(0, 0);
  ctx.lineTo(stageWidth, 0);
  ctx.lineTo(startPointX, startPointY);
  ctx.bezierCurveTo(
    cp1x,
    stageHeight - increment,
    cp2x,
    stageHeight - increment,
    endPointX,
    endPointY
  );

  ctx.fillStyle = " rgb(138, 17, 17)";
  ctx.fill();
  ctx.closePath();
}

function resizeHandler() {
  canvas.width = stageWidth * 2;
  canvas.height = stageHeight * 2;
  ctx.scale(2, 2);

  drawBezierCurve();
  let timeId = setInterval(drawBezierCurve, 50);

  window.addEventListener("click", function () {
    clearInterval(timeId);
  });
}

function init() {
  window.addEventListener("resize", resizeHandler);
}

window.onload = () => resizeHandler();
init();
